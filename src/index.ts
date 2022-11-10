import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
  PORT,
} = process.env;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}  
  ${MYSQL_HOST}
  ${MYSQL_USER}
  ${MYSQL_PASSWORD}
  ${MYSQL_DATABASE}
  ${MYSQL_PORT}`,
));

export default server;
