import express from "express";

import {
	loginController,
	registerController,
	testController,
	forgotPasswordController,
	updateProfileController,
	getOrdersController,
	getAllOrdersController,
	orderStatusController,
	getAllUsersController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

router.route("/register").post(registerController);

router.route("/login").post(loginController);

router.route("/forgot-password").post(forgotPasswordController);

router.route("/test").get(requireSignIn, isAdmin, testController);

// protected user route
router.route("/user-auth").get(requireSignIn, (req, res) => {
	res.status(200).send({ ok: true });
});

// protected admin route
router.route("/admin-auth").get(requireSignIn, isAdmin, (req, res) => {
	res.status(200).send({ ok: true });
});
router.route("/profile").put(requireSignIn, updateProfileController);
router.route("/orders").get(requireSignIn, getOrdersController);
router.route("/all-orders").get(requireSignIn, isAdmin, getAllOrdersController);
router.route("/order-status/:orderId").put(requireSignIn, isAdmin, orderStatusController);
router.route("/users/all").get(requireSignIn, isAdmin, getAllUsersController);

export default router;
