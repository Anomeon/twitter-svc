// Inspired by postman implementation: https://gist.github.com/smaeda-ks/dc5cdd50956e63bdae11314612389a07
// Logic of generation signature explained: https://habr.com/ru/post/86846/

import { customAlphabet } from 'nanoid'
import crypto from 'crypto';

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 11)

export const getSigningKey = (consumerSecret, accessSecret) => `${consumerSecret}&${accessSecret}`;

export const getBaseString = (reqMethod, reqUrl, oauthAndReqParams) => {
  const sortedParamsKeys = Object.keys(oauthAndReqParams).sort();
  const paramsAsQueryString = sortedParamsKeys.map(key => {
    let value = oauthAndReqParams[key];
    if (Array.isArray(value)) {
      value = value.join(',');
    }
    return `${key}=${encodeURIComponent(value)}`;
  }).join('&');
  return `${reqMethod}&${encodeURIComponent(reqUrl)}&${encodeURIComponent(paramsAsQueryString)}`;
};

export const getSignature = (signingKey, baseString) => {
  const hmac = crypto.createHmac('sha1', signingKey);
  return hmac.update(baseString).digest().toString('base64');
};

export const getNonce = () => nanoid();
