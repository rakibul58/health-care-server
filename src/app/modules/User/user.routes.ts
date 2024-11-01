import express from "express";
import { UserControllers } from "./user.controllers";

const router = express.Router();

router.route("/create-admin").post(UserControllers.createAdmin);

export const userRoutes = router;
