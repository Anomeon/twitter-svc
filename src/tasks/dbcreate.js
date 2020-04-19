const { Pool } = require('pg');
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = require('../config.js');

const pool = new Pool({
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: DB_PORT,
  database: 'template1',
});

pool.query('CREATE DATABASE ' + DB_NAME, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Database ${DB_NAME} created`);
  }
  pool.end();
});
