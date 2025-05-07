import express from "express";
import { createProductController, deleteProductController, getAllProductController, getProductbyIdController, putProductController } from "../controllers/productController";
const router = express.Router();

router.post("/", createProductController);
router.put(":/id", putProductController);
router.get(":/id", getProductbyIdController);
router.get("/", getAllProductController);
router.delete("/", deleteProductController);

export default router;
