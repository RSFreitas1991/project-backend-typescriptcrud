import mysql from 'mysql2/promise';

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  PORT,
} = process.env;

const db = mysql.createPool({
  host: MYSQL_HOST,
  port: Number(PORT),
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

export default db;