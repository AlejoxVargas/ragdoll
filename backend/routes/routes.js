import express from "express";
import {
  // getAllBuys,
  // getOneBuy,
  // createBuy,
  // updateBuy,
  // deleteBuy,
  getAllSells,
  getOneSell,
  createSell,
  updateSell,
  deleteSell,
} from "../controllers/Controller.js";

const router = express.Router();

// Rutas para la tabla "buys"
// router.get("/buys", getAllBuys);
// router.get("/buys/:id", getOneBuy);
// router.post("/buys", createBuy);
// router.put("/buys/:id", updateBuy);
// router.delete("/buys/:id", deleteBuy);

// Rutas para la tabla "sells"
router.get("/sells", getAllSells);
router.get("/sells/:id", getOneSell);
router.post("/sells", createSell);
router.put("/sells/:id", updateSell);
router.delete("/sells/:id", deleteSell);

export default router;
