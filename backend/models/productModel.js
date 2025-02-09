import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Product name, must be a string and is required
    description: { type: String, required: true }, // Product description, must be a string and is required
    price: { type: Number, required: true }, // Product price, must be a number and is required
    image: { type: Array, required: true }, // Product images, must be an array and is required
    category: { type: String, required: true }, // Product category, must be a string and is required
    subCategory: { type: String, required: true }, // Product subcategory, must be a string and is required
    sizes: { type: Array, required: true }, // Available sizes, must be an array and is required
    bestseller: { type: Boolean }, // Indicates if the product is a bestseller, optional
    date: { type: Number, required: true } // Date associated with the product, must be a number and is required
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel