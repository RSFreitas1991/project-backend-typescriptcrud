import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
} = process.env;

const DB_PORT = Number(MYSQL_PORT);

const db = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  port: DB_PORT,
});

export default db;