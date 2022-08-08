import db from './connection';
import ProductsList from '../interfaces/productsListInterface';

const ordersModel = {
  async getAll() {
    const sql = 'SELECT * FROM Trybesmith.Orders;';
    const [rows] = await db.query(sql);
    return rows;
  },
  async getProductsOrderIdList(): Promise<ProductsList[]> {
    const sql = 'SELECT id, orderId FROM Trybesmith.Products;';
    const [rows] = await db.query(sql);
    return rows as ProductsList[];
  },
};

export default ordersModel;