import express from "express";
import { AdminControllers } from "./admin.controllers";

const router = express.Router();

router.route("/").get(AdminControllers.getAllAdmins);
router
  .route("/:id")
  .get(AdminControllers.getAdminById)
  .patch(AdminControllers.updateAdmin)
  .delete(AdminControllers.softDeleteAdmin);

export const AdminRoutes = router;
