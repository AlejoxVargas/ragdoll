import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Sell = db.define("sell", {
  title: {
    type: DataTypes.STRING(100),
  },
  tags: {
    type: DataTypes.STRING(100),
  },
  description: {
    type: DataTypes.STRING(100),
  },
  price: {
    type: DataTypes.INTEGER,
  },
  image_url: {
    type: DataTypes.STRING(300),
  },
  user_email: {
    type: DataTypes.STRING(100),
  },
  user_phone: {
    type: DataTypes.STRING(100),
  },
  user_name: {
    type: DataTypes.STRING(100),
  },
});

export default Sell;
