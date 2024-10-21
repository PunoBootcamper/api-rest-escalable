import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO PUEDE VER UN USUARIO AUTENTICADO /JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

export { getItems };
