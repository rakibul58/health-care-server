import { Request, Response } from "express";
import { AdminServices } from "./admin.services";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import { sendResponse } from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

const getAllAdmins = async (req: Request, res: Response) => {
  const filter = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await AdminServices.getAllAdminsFromDB(filter, options);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin Data Fetched",
    meta: result.meta,
    data: result.data,
  });
};

const getAdminById = async (req: Request, res: Response) => {
  const result = await AdminServices.getAdminByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin Data Fetched by id",
    data: result,
  });
};

const updateAdmin = async (req: Request, res: Response) => {
  const result = await AdminServices.updateAdminIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin Data Updated",
    data: result,
  });
};

const deleteAdmin = async (req: Request, res: Response) => {
  const result = await AdminServices.deleteAdminFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin Data Deleted",
    data: result,
  });
};

const softDeleteAdmin = async (req: Request, res: Response) => {
  const result = await AdminServices.softDeleteFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Admin Data Deleted",
    data: result,
  });
};

export const AdminControllers = {
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  softDeleteAdmin,
};
