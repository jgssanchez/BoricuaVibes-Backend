const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    description: { type: String, required: [true, 'La descripción es obligatoria'] },
    price: { type: Number, required: [true, 'El precio es obligatorio'], min: [0, 'El precio debe ser mayor o igual a cero'] },
    image:{ type: String, required: [true, 'la imagen es obligatoria'] },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;