import { ResultSetHeader } from 'mysql2';
import db from './connection';
import Product from '../interfaces/productInterface';

const productsModel = {
  async getAll() {
    const sql = 'SELECT * FROM Trybesmith.Products;';
    const [rows] = await db.query(sql);
    return rows;
  },
  async addProduct(product: Product) {
    const sql = 'INSERT INTO Trybesmith.Products'
    + '(name, amount) VALUES (?, ?);';
    const result = await db.query<ResultSetHeader>(sql, [product.name, product.amount]);
    return { id: result[0].insertId, ...product };
  },
};

export default productsModel;