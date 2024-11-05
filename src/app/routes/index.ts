import express from "express";
import { userRoutes } from "../modules/User/user.routes";
import { AdminRoutes } from "../modules/Admin/admin.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    router: userRoutes,
  },
  {
    path: "/admins",
    router: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
