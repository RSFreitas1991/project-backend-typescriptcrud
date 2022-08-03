import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';

const secret = 'nossaSenhaSecreta';

const usersService = {
  createToken(user: any) {
    console.log(user);
    console.log(secret);
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