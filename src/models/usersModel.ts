import db from './connection';

const usersModel = {
  async addUser(user: any) {
    const sql = 'INSERT INTO Trybesmith.Users'
    + '(username, classe, level, password) VALUES (?, ?, ?, ?);';
    await db.query(sql, [user.username, user.classe, user.level, user.password]);
    const getSaleId = 'SELECT id, name, amount FROM Trybesmith.Products';
    const [rows]: any = await db.query(getSaleId);
    const lastSale = rows.pop();
    return lastSale;
  },
};

export default usersModel;