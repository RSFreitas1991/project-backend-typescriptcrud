import db from './connection';

const ordersModel = {
  async getAll() {
    const sql = 'SELECT * FROM Trybesmith.Orders;';
    const [rows] = await db.query(sql);
    return rows;
  },
  async getProductsOrderIdList() {
    const sql = `SELECT 
    id,
      orderId
   FROM Trybesmith.Products;`;
    const [rows] = await db.query(sql);
    return rows;
  },
};

export default ordersModel;