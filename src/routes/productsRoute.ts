import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRoute = Router();

productsRoute.get('/', productsController.getAll);
productsRoute.post('/', productsController.addProduct);

export default productsRoute;