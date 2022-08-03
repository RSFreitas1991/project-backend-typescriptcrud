import express from 'express';
import ordersRoute from './routes/ordersRoute';
import productsRoute from './routes/productsRoute';
import usersRoute from './routes/usersRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
app.use('/users', usersRoute);

export default app;
