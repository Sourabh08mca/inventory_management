const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true } // This automatically adds createdAt and updatedAt fields
);

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;
