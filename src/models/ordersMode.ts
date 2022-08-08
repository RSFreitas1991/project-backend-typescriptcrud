import db from './connection';
import OrderList from '../interfaces/orderListInterface';

const ordersModel = {
  async getAll() {
    const sql = 'SELECT * FROM Trybesmith.Orders;';
    const [rows] = await db.query(sql);
    return rows;
  },
  async getProductsOrderIdList(): Promise<OrderList[]> {
    const sql = 'SELECT id, orderId FROM Trybesmith.Products;';
    const [rows] = await db.query(sql);
    return rows as OrderList[];
  },
};

export default ordersModel;