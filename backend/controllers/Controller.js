import multer from "multer";
import { uploadImage } from "../middleware/Upload.js";
import BuyModel from "../models/BuyModel.js";
import SellModel from "../models/sellModel.js";

// Métodos para la tabla "buys"
export const getAllBuys = async (req, res) => {
  try {
    const buys = await BuyModel.findAll();
    res.json(buys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneBuy = async (req, res) => {
  try {
    const buy = await BuyModel.findByPk(req.params.id);
    res.json(buy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBuy = async (req, res) => {
  try {
    await BuyModel.create(req.body);
    res.status(201).json({ message: "Compra creada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBuy = async (req, res) => {
  try {
    await BuyModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Compra actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBuy = async (req, res) => {
  try {
    await BuyModel.destroy({ where: { id: req.params.id } });
    res.json({ message: "Compra eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Métodos para la tabla "sells"
export const getAllSells = async (req, res) => {
  try {
    const sells = await SellModel.findAll();
    res.json(sells);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneSell = async (req, res) => {
  try {
    const sell = await SellModel.findByPk(req.params.id);
    res.json(sell);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSell = async (req, res) => {
  try {
    // Ejecuta el middleware de multer para manejar la carga de la imagen
    uploadImage(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      try {
        console.log(req.file);
const image_url = req.file ? req.file.path.replace(/\\/g, "/") : null;
        const newsell = await SellModel.create({
          title: req.body.title,
          tags: req.body.tags,
          description: req.body.description,
          price: req.body.price,
          image_url: image_url,
          user_email: req.body.user_email,
          user_phone: req.body.user_phone,
          user_name: req.body.user_name,
        });

        res.json({
          message: "¡Registro creado correctamente!",
          venta: newsell,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSell = async (req, res) => {
  try {
    // Ejecuta el middleware de multer para manejar la carga de la imagen
    uploadImage(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ message: err.message });
      } else if (err) {
        return res.status(500).json({ message: err.message });
      }

      if (req.file) {
        req.body.image_url = req.file.path;
      }

      // Actualiza el blog
      await SellModel.update(req.body, {
        where: { id: req.params.id },
      });

      res.json({
        message: "Registro actualizado correctamente",
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSell = async (req, res) => {
  try {
    await SellModel.destroy({ where: { id: req.params.id } });
    res.json({ message: "Venta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
