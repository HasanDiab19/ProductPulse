import express from "express";
const router = express.Router();
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  addReviewToProduct,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(getProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, addReviewToProduct);

export default router;
