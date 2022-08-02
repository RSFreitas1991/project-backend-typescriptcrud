import db from './connection';

const productsModel = {
  async getAll() {
    const sql = 'SELECT * FROM Trybesmith.Products;';
    const [rows] = await db.query(sql);
    return rows;
  },
};

export default productsModel;