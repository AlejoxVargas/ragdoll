import express from "express";
import cors from "cors";
import db from "./database/db.js";
import indexRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", indexRoutes);

(async function() {
  try {
    await db.authenticate();
    console.log("Conexión establecida con la base de datos");
  } catch (error) {
    console.log(error);
  }
})();

const port = process.env.NODE_ENV === 'test' ? 8001 : 8000;

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});

export default app;