import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAll);

export default ordersRoute;