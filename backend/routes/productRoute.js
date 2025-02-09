import express from "express"
import { addProduct,listProducts,singleProduct ,removeProduct} from "../controllers/productController.js"
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxcount:1},{name:'image2',maxcount:1},{name:'image3',maxcount:1},{name:'image4',maxcount:1}]),addProduct);
productRouter.post('/remove',adminAuth,removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts);

export default productRouter