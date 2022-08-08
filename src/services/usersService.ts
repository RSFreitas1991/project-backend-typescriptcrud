import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import User from '../interfaces/userInterface';

const secret = 'nossaSenhaSecreta';

const usersService = {
  createToken(user: User) {
    const token = jwt.sign(user, secret);
    return token;
  },
  async addUser(user: User) {
    const token = this.createToken(user);
    await usersModel.addUser(user);
    return token;
  },
};

export default usersService;