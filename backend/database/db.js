import { Sequelize } from "sequelize";

const db = new Sequelize("ragdolldb", "root", "Ix35gobrasil003", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export default db;