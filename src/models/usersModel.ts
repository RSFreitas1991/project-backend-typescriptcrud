import db from './connection';
import User from '../interfaces/userInterface';

const usersModel = {
  async addUser(user: User) {
    const sql = 'INSERT INTO Trybesmith.Users'
    + '(username, classe, level, password) VALUES (?, ?, ?, ?);';
    const result = await db.query(sql, [user.username, user.classe, user.level, user.password]);
    return result;
  },
};

export default usersModel;