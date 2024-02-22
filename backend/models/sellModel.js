import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Sell = db.define("sell", {
  title: {
    type: DataTypes.STRING,
  },
  tags: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  image_url: {
    type: DataTypes.STRING,
  },
  user_email: {
    type: DataTypes.STRING,
  },
  user_phone: {
    type: DataTypes.STRING,
  },
  user_name: {
    type: DataTypes.STRING,
  },
});

export default Sell;
