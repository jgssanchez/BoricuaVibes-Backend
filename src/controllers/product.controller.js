// controllers/product.controller.js
const { 
    createProductService, 
    getProductByIdService, 
    getAllProductsService, 
    updateProductService, 
    deleteProductService 
  } = require('../services/product.service');
  
  const createProduct = async (req, res) => {
    try {
      const product = req.body;
      const productCreated = await createProductService(product);
      res.status(201).json({ message: "Producto creado con éxito", product: productCreated });
    } catch (error) {
      res.status(500).json({ message: "Error al crear el producto", error });
    }
  };
  
  const getAllProducts = async (req, res) => {
    try {
      const products = await getAllProductsService();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los productos", error });
    }
  };
  
  const getProductById = async (req, res) => {
    try {
      const product = await getProductByIdService(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el producto", error });
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      const updatedProduct = await updateProductService(id, newData);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el producto", error });
    }
  };
  
  const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await deleteProductService(id);
      res.status(200).json({ message: "Producto eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el producto", error });
    }
  };
  
  module.exports = { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
  };
  