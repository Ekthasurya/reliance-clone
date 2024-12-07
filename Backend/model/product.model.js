import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0 }, 
  category: { type: String, required: true },
  description: { type: String, required: true },
  image:[String],
  price: { type: Number, required: true },
  discount:[String],
  emi:{ type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

export{Product}