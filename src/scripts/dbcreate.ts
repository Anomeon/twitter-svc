import { Pool } from 'pg';
import { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } from '../config.js';
import { logger } from '../../logger';

const pool = new Pool({
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: DB_PORT,
  database: 'template1',
});

pool.query('CREATE DATABASE ' + DB_NAME, (error) => {
  if (error) {
    logger.error(error);
    return;
  }
  logger.info(`Database ${DB_NAME} created`);
  pool.end();
});
