import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const ordersController = {
  async getAll(_req: Request, res: Response) {
    try {
      const list = await ordersService.getAll();
      res.json(list);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default ordersController;