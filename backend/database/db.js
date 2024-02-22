import { Sequelize } from "sequelize";

const db = new Sequelize("ragdolldb", "root", "Misql123123.", {
  host: "localhost",
  dialect: "mysql",
});

export default db;