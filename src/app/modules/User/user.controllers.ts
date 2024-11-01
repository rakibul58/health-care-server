import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createAdmin = async (req: Request, res: Response) => {
  const result = await UserServices.createAdminInDB(req.body);
//   console.log({result});
  res.send(result);
};

export const UserControllers = {
  createAdmin,
};
