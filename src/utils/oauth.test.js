import { getSigningKey, getBaseString, getSignature } from './oauth';

const OAUTH_CONSUMER_KEY = 'QVaTM2FmJXeZtQJwmloiMklhZ';
const OAUTH_CONSUMER_SECRET = '1MGo2oEgLMS9Phqu3nxcnH5zzL1gWx36UMo0cf679wJKAk1TUy';
const OAUTH_ACCESS_TOKEN = '337808157-U5USbEZewHH26IDgwrYwygR0J3Ova5zo1LEf7a7P';
const OAUTH_ACCESS_SECRET = 'kxv9UjsQIHZ39smCPTKV1SuBQRvExLzCK5BftJ8rze8sF';
const OAUTH_NONCE = 'lm7JMoimMTx';
const OAUTH_TIMESTAMP = 1606578620;
const OAUTH_VERSION = '1.0';
const OAUTH_SIGNATURE_METHOD = 'HMAC-SHA1';
const REQUEST_URL = 'https://api.twitter.com/1.1/statuses/lookup.json';
const REQUEST_METHOD = 'GET';
const REQUEST_IDS_PARAM = '859053309382021126,859053309382021127';
const OAUTH_SIGNATURE = 'MSxVOcdBmc2Kv5iLv+cXY7lI6g4=';

test('checks signing key', () => {
  const signingKey = getSigningKey(OAUTH_CONSUMER_SECRET, OAUTH_ACCESS_SECRET);
  expect(signingKey).toBe(`${OAUTH_CONSUMER_SECRET}&${OAUTH_ACCESS_SECRET}`);
});

test('checks oauth base string', () => {
  const baseString = getBaseString(REQUEST_METHOD, REQUEST_URL, {
    oauth_consumer_key: OAUTH_CONSUMER_KEY,
    oauth_timestamp: OAUTH_TIMESTAMP,
    oauth_nonce: OAUTH_NONCE,
    oauth_token: OAUTH_ACCESS_TOKEN,
    oauth_signature_method: OAUTH_SIGNATURE_METHOD,
    oauth_version: OAUTH_VERSION,
    id: REQUEST_IDS_PARAM,
  });

  const SORTED_OAUTH_AND_REQUEST_PARAMS = `id=${encodeURIComponent(REQUEST_IDS_PARAM)}&oauth_consumer_key=${OAUTH_CONSUMER_KEY}&oauth_nonce=${OAUTH_NONCE}&oauth_signature_method=${OAUTH_SIGNATURE_METHOD}&oauth_timestamp=${OAUTH_TIMESTAMP}&oauth_token=${OAUTH_ACCESS_TOKEN}&oauth_version=${OAUTH_VERSION}`;
  const baseStringSample = `${REQUEST_METHOD}&${encodeURIComponent(REQUEST_URL)}&${encodeURIComponent(SORTED_OAUTH_AND_REQUEST_PARAMS)}`;

  expect(baseString).toBe(baseStringSample);
});

test('checks oauth signature key', () => {
  const signingKey = getSigningKey(OAUTH_CONSUMER_SECRET, OAUTH_ACCESS_SECRET);
  const baseString = getBaseString(REQUEST_METHOD, REQUEST_URL, {
    oauth_consumer_key: OAUTH_CONSUMER_KEY,
    oauth_timestamp: OAUTH_TIMESTAMP,
    oauth_nonce: OAUTH_NONCE,
    oauth_token: OAUTH_ACCESS_TOKEN,
    oauth_signature_method: OAUTH_SIGNATURE_METHOD,
    oauth_version: OAUTH_VERSION,
    id: REQUEST_IDS_PARAM,
  });
  const signature = getSignature(signingKey, baseString);

  expect(signature).toBe(OAUTH_SIGNATURE);
});
