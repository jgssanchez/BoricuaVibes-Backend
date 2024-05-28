
const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller'); // Importa los controladores de productos
const { isAuthenticated, isAdmin } = require('../middlewares/auth'); // Importa tus middlewares de autenticación

router.get('/', isAuthenticated, getAllProducts);
router.get('/:id', isAuthenticated, getProductById);
router.post('/create', isAuthenticated, createProduct);
router.put('/update/:id', isAuthenticated, updateProduct);
router.delete('/delete/:id', isAuthenticated, deleteProduct);

module.exports = router;
