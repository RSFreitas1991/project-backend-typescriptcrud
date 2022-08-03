import { Router } from 'express';
import usersController from '../controllers/usersController';

const usersRoute = Router();

usersRoute.post('/', usersController.addUser);

export default usersRoute;