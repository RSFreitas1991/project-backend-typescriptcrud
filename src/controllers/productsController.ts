import { Request, Response } from 'express';
import productsService from '../services/productsService';

const productsController = {
  async getAll(_req: Request, res: Response) {
    try {
      const list = await productsService.getAll();
      res.json(list);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
  async addProduct(req: Request, res: Response) {
    try {
      const product = req.body;
      const productsList = await productsService.addProduct(product);
      res.status(201).json(productsList);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default productsController;