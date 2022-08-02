import express from 'express';
import ordersRoute from './routes/ordersRoute';
import productsRoute from './routes/productsRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

export default app;
