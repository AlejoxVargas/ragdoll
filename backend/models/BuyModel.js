// Import Sequelize and the connection instance
import { DataTypes } from "sequelize";
import db from "../database/db.js";

// Define the model
const Buy = db.define("buys", {
  user_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING(100),  
    allowNull: false,
  },
  user_phone: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

// Export the model
export default Buy;
