import db from './connection';

const productsModel = {
  async getAll() {
    const sql = 'SELECT * FROM Trybesmith.Products;';
    const [rows] = await db.query(sql);
    return rows;
  },
  async addProduct(product: any) {
    const sql = 'INSERT INTO Trybesmith.Products'
    + '(name, amount) VALUES (?, ?);';
    await db.query(sql, [product.name, product.amount]);
    const getSaleId = 'SELECT id, name, amount FROM Trybesmith.Products';
    const [rows]: any = await db.query(getSaleId);
    const lastSale = rows.pop();
    return lastSale;
  },
};

export default productsModel;