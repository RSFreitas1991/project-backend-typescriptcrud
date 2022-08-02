import db from './connection';

/* const query = `SELECT
Orders.id id,
Orders.userId userId,
GROUP_CONCAT(Products.id) productsIds
FROM
Trybesmith.Orders AS Orders
JOIN Trybesmith.Products AS Products
ON Orders.id = Products.orderId
GROUP BY Orders.id
ORDER BY Orders.id ASC;`; */

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