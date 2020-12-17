import dotenv from 'dotenv';

dotenv.config();

export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT
  ? parseInt(process.env.DB_PORT, 10)
  : 5432;
export const DB_NAME = process.env.DB_NAME;
export const OAUTH_CONSUMER_KEY = process.env.OAUTH_CONSUMER_KEY || '';
export const OAUTH_CONSUMER_SECRET = process.env.OAUTH_CONSUMER_SECRET || '';
export const OAUTH_ACCESS_TOKEN = process.env.OAUTH_ACCESS_TOKEN || '';
export const OAUTH_ACCESS_SECRET = process.env.OAUTH_ACCESS_SECRET || '';
