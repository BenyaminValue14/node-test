"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const name_db = process.env.DB_NAME || 'benyaoot_first_db';
const user = process.env.DB_USER || 'benyaoot_ben22';
const host = process.env.DB_HOST || '192.254.234.62';
const pass = process.env.DB_PASS || 'Developer+19+';
const db = new sequelize_1.Sequelize(name_db, user, pass, {
    host: host,
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map