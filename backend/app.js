import express from "express";
import cors from "cors";
import db from "./database/db.js";
import indexRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", indexRoutes);

try {
  await db.authenticate();
  console.log("Conexión establecida con la base de datos");
} catch (error) {
  console.log(error);
}

app.listen(8000, () => {
  console.log("Server running in http://localhost:8000");
});
