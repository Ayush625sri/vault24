import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
	createProductController,
	getProductController,
	getSingleProductController,
	productPhotoController,
	updateProductController,
	deleteProductController,
	productFilterController,
	productCountController,
	productListController,
	searchProductController,
	relatedProductController,
	productCategoryController,
	braintreeTokenController,
	braintreePaymentsController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

router
	.route("/create-product")
	.post(requireSignIn, isAdmin, formidable(), createProductController);
router.route("/all").get(getProductController);
router.route("/get/:pid").get(getSingleProductController);
router.route("/product-photo/:pid").get(productPhotoController);
router
	.route("/:pid")
	.delete(requireSignIn, isAdmin, deleteProductController)
	.put(requireSignIn, isAdmin, formidable(), updateProductController);
router.route("/product-filters").post(productFilterController);

router.route("/count/all").get(productCountController);
router.route("/product-list/:page").get(productListController);

router.route("/search/:keyword").get(searchProductController);
router.route("/related-product/:pid/:cid").get(relatedProductController);
router.route("/product-category/:slug").get(productCategoryController);

router.route("/braintree/token").get(braintreeTokenController);
router
	.route("/braintree/payment")
	.post(requireSignIn, braintreePaymentsController);

export default router;
