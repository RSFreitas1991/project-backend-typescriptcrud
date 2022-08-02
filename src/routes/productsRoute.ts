import { Router } from 'express';

/* const productController = require('../controllers/productsController'); */

const productsRoute = Router();

productsRoute.get('/', () => console.log('deu'));

export default productsRoute;