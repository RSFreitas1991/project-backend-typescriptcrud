import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import usersModel from '../models/usersModel';

dotenv.config();

const secret: any = process.env.JWT_SECRET;

const usersService = {
  createToken(user: any) {
    console.log(user);
    const token = jwt.sign(user, secret);
    console.log(token);
    return token;
  },
  async addUser(user: any) {
    const token = await this.createToken(user);
    await usersModel.addUser(user);
    return token;
  },
};

export default usersService;