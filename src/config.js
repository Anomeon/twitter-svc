const dotenv = require('dotenv');
dotenv.config();

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  OAUTH_CONSUMER_KEY,
  OAUTH_CONSUMER_SECRET,
  OAUTH_ACCESS_TOKEN,
  OAUTH_ACCESS_SECRET,
} = process.env

module.exports = {
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
