import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';

const secret: any = process.env.JWT_SECRET;

const usersService = {
  createToken(user: any) {
    const token = jwt.sign({ user }, secret);
    return token;
  },
  async addUser(user: any) {
    const token = await this.createToken(user);
    await usersModel.addUser(user);
    return token;
  },
};

export default usersService;