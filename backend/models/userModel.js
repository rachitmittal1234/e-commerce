import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // User's name, must be a string and is required
    email: { type: String, required: true, unique: true }, // User's email, must be a string, is required, and must be unique
    password: { type: String, required: true }, // User's password, must be a string and is required
    cartData: { type: Object, default: {} } // Additional user data, defaults to an empty object
}, { minimize: false }); // Schema option to prevent Mongoose from removing empty objects

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel