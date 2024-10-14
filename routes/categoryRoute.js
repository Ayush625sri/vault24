import express from "express";
import {
    categoryController,
    createCategoryController,
    deleteCategoryController,
    singleCategoryController,
    updateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/create-category")
  .post(requireSignIn, isAdmin, createCategoryController);
router
  .route("/update-category/:id")
  .put(requireSignIn, isAdmin, updateCategoryController);
// router.route('/get-categories').get(requireSignIn,isAdmin, categoryController )
router.route("/get-categories").get(categoryController);
// router.route('/single-category/:slug').get(requireSignIn,isAdmin,  singleCategoryController )
router.route("/single-category/:slug").get(singleCategoryController);
router
  .route("/delete-category/:id")
  .delete(requireSignIn, isAdmin, deleteCategoryController);

export default router;
