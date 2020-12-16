import axios, { Method } from 'axios';
import qs from 'qs';
import {
  getNonce,
  getSignature,
  getSigningKey,
  getBaseString,
} from '../utils/oauth';
import { RawTweet } from '../entities/RawTweet';
import { logger } from '../../logger';
import {
  OAUTH_CONSUMER_KEY,
  OAUTH_CONSUMER_SECRET,
  OAUTH_ACCESS_TOKEN,
  OAUTH_ACCESS_SECRET,
} from '../config';
import { Connection } from 'typeorm';
import { Tweet } from '../types/Tweet';
import { OAuthParams } from '../utils/oauth';

const paramsSerializer = (params: unknown) =>
  qs.stringify(params, { arrayFormat: 'comma' });

export class TweetService {
  constructor(public connection: Connection) {
    this.connection = connection;
  }

  async saveTweetsByIds(ids: string | string[]): Promise<void> {
    const method: Method = 'GET';
    const url = 'https://api.twitter.com/1.1/statuses/lookup.json';
    const params = { id: ids, ...this.getAuthParams() };
    const signingKey = getSigningKey(
      OAUTH_CONSUMER_SECRET,
      OAUTH_ACCESS_SECRET,
    );
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
    };

    const rawTweetRepository = this.connection.getRepository(RawTweet);

    let data: Tweet[] | undefined;

    try {
      ({ data } = await axios(requestOptions));
    } catch (error) {
      logger.error(error);
    }

    if (data) {
      const preparedData = data.map((rawTweet) => ({
        id: rawTweet.id_str,
        data: rawTweet,
      }));

      try {
        const entities = await rawTweetRepository.save(preparedData);
        logger.info(entities.map((entity) => entity.id));
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
}
