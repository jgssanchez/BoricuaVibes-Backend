const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middlewares/auth");
const Product = require("../models/product.model");

router.get("/products", isAuthenticated, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
});

router.post(
  "/products",
  isAuthenticated,
  isAdmin("admin"),
  async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error al crear el producto", error });
    }
  }
);

router.put(
  "/products/:id",
  isAuthenticated,
  isAdmin("admin"),
  async (req, res) => {
    try {
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al actualizar el producto", error });
    }
  }
);

router.delete(
  "/products/:id",
  isAuthenticated,
  isAdmin("admin"),
  async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el producto", error });
    }
  }
);

module.exports = router;
