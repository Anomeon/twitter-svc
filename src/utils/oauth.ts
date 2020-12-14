// Inspired by postman implementation: https://gist.github.com/smaeda-ks/dc5cdd50956e63bdae11314612389a07
// Logic of generation signature explained: https://habr.com/ru/post/86846/

import { customAlphabet } from 'nanoid';
import crypto from 'crypto';

const nanoid = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  11,
);

export const getSigningKey = (
  consumerSecret: string,
  accessSecret: string,
): string => `${consumerSecret}&${accessSecret}`;

export type OAuthParams = {
  oauth_consumer_key: string;
  oauth_token: string;
  oauth_signature_method: string;
  oauth_version: string;
  oauth_timestamp: number;
  oauth_nonce: string;
};

export type OAuthParamsAndSignature = OAuthParams & { oauth_signature: string };

// TODO should be more common
export type RequestParams = Record<
  string,
  string | number | boolean | Array<string | number | boolean>
>;

export type OAuthAndRequestParams = OAuthParams & RequestParams;

export const getBaseString = (
  reqMethod: string,
  reqUrl: string,
  oauthAndReqParams: OAuthAndRequestParams,
): string => {
  const sortedParamsKeys = Object.keys(oauthAndReqParams).sort();
  const paramsAsQueryString = sortedParamsKeys
    .map((key) => {
      let value = oauthAndReqParams[key];
      if (Array.isArray(value)) {
        value = value.join(',');
      }
      return `${key}=${encodeURIComponent(value)}`;
    })
    .join('&');
  return `${reqMethod}&${encodeURIComponent(reqUrl)}&${encodeURIComponent(
    paramsAsQueryString,
  )}`;
};

export const getSignature = (
  signingKey: string,
  baseString: string,
): string => {
  const hmac = crypto.createHmac('sha1', signingKey);
  return hmac.update(baseString).digest().toString('base64');
};

export const getNonce = (): string => nanoid();
