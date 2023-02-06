import { Sequelize } from "sequelize";

const name_db = process.env.DB_NAME || 'benyaoot_first_db';
const user = process.env.DB_USER || 'benyaoot_ben22';
const host = process.env.DB_HOST || '192.254.234.62';
const pass = process.env.DB_PASS || 'Developer+19+';
const db = new Sequelize(name_db, user, pass, {
  host: host,
  dialect: 'mysql',
  //logging: false
});

export default db;
