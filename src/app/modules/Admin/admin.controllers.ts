import { Request, Response } from "express";
import { AdminServices } from "./admin.services";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllAdmins = async (req: Request, res: Response) => {
  const filter = pick(req.query, adminFilterableFields);
  const options = pick(req.query , ['limit', 'page', 'sortBy', 'sortOrder'])
  const result = await AdminServices.getAllAdminsFromDB(filter, options);
  res.status(200).json({
    success: true,
    message: "Admin Data Fetched",
    data: result,
  });
};

export const AdminControllers = {
  getAllAdmins,
};
