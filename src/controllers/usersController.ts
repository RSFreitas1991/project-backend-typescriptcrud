import { Request, Response } from 'express';
import usersService from '../services/usersService';

const usersController = {
  async addUser(req: Request, res: Response) {
    try {
      const user = req.body;
      const token = await usersService.addUser(user);
      res.status(201).json({ token });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default usersController;