import dotenv from 'dotenv';

dotenv.config();

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  OAUTH_CONSUMER_KEY = '',
  OAUTH_CONSUMER_SECRET = '',
  OAUTH_ACCESS_TOKEN = '',
  OAUTH_ACCESS_SECRET = '',
} = process.env;

export {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  OAUTH_CONSUMER_KEY,
  OAUTH_CONSUMER_SECRET,
  OAUTH_ACCESS_TOKEN,
  OAUTH_ACCESS_SECRET,
};
