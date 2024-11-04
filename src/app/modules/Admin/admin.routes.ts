import express from "express";
import { AdminControllers } from "./admin.controllers";

const router = express.Router();

router.route("/").get(AdminControllers.getAllAdmins);

export const AdminRoutes = router;
