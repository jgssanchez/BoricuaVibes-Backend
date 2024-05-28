const Product = require('../models/product.model');

const createProductService = async (product) => {
  const newProduct = new Product(product);
  await newProduct.save();
  return newProduct;
};

const getProductByIdService = async (id) => {
  return Product.findById(id);
};

const getAllProductsService = async () => {
  return Product.find();
};

const updateProductService = async (id, newData) => {
  return Product.findByIdAndUpdate(id, newData, { new: true });
};

const deleteProductService = async (id) => {
  return Product.findByIdAndDelete(id);
};

module.exports = { 
  createProductService, 
  getProductByIdService, 
  getAllProductsService, 
  updateProductService, 
  deleteProductService 
};
