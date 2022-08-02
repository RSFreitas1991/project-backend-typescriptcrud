import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRoute = Router();

productsRoute.get('/', productsController.getAll);

export default productsRoute;