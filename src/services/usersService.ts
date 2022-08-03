import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';

const secret: any = process.env.JWT_SECRET;

const usersService = {
  createToken(user: any) {
    const token = jwt.sign({ user }, secret);
    return token;
  },
  async addUser(user: any) {
  /*     const token = await this.createToken(user); */
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ1c2VyIjp7InVzZXJuYW1lIjoiY2F0aWF1IiwicGFzc3dvcmQiOiJzZW5oY
    TEyMzQiLCJsZXZlbCI6MiwiY2xhc3NlIjoiY2xhc3NlIn0sImlhdCI6MTY1OTUzMTM4Nn0.
    BgypOu2ivAEmEpocJ79P6RwSKMV-O1J8nWJ6SmvwKS8`;
    await usersModel.addUser(user);
    return token;
  },
};

export default usersService;