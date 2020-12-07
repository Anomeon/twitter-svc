
import axios, { Method } from 'axios';
import _ from 'lodash';
import qs from 'qs';
import { getNonce, getSignature, getSigningKey, getBaseString } from '../utils/oauth';
import { RawTweet } from '../entities/RawTweet';
import { logger } from '../../logger';
import {
  OAUTH_CONSUMER_KEY,
  OAUTH_CONSUMER_SECRET,
  OAUTH_ACCESS_TOKEN,
  OAUTH_ACCESS_SECRET,
} from '../config';

type OAuthParams = {
  oauth_consumer_key: string,
  oauth_token: string,
  oauth_signature_method: string,
  oauth_version: string,
  oauth_timestamp: number,
  oauth_nonce: string,
  oauth_signature?: string,
};

const paramsSerializer = params => qs.stringify(params, { arrayFormat: 'comma' });

export class TweetService {
  connection
  constructor(connection) {
    this.connection = connection;
  }

  saveTweetsByIds = async ids => {
    const method: Method = 'GET';
    const url = 'https://api.twitter.com/1.1/statuses/lookup.json';
    const params = { id: ids, ...this.getAuthParams() };
    const signingKey = getSigningKey(OAUTH_CONSUMER_SECRET, OAUTH_ACCESS_SECRET);
    const baseString = getBaseString(method, url, params);
    const signature = getSignature(signingKey, baseString);

    const requestOptions = {
      method,
      url,
      params: {
        ...params,
        oauth_signature: signature,
      },
      paramsSerializer,
    }

    const rawTweetRepository = this.connection.getRepository(RawTweet);

    let data;

    try {
      ({ data } = await axios(requestOptions));
    } catch (error) {
      logger.error(error);
    }

    if (data) {
      const preparedData = data.map(rawTweet => ({
        id: rawTweet.id_str,
        data: rawTweet,
      }));

      try {
        const entities = await rawTweetRepository.save(preparedData);
        logger.info(entities.map(entity => entity.id));
      } catch (error) {
        logger.error(error);
      }
    }
  }

  private getAuthParams(): OAuthParams {
    return {
      oauth_consumer_key: OAUTH_CONSUMER_KEY,
      oauth_token: OAUTH_ACCESS_TOKEN,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version: '1.0',
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_nonce: getNonce(),
    };
  }
};
