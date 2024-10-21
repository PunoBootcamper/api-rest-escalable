import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { registerNewUser } from "../services/auth";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    if (!jwt) {
      res.status(401).send("TOKEN_NO_PROVIDED");
      return;
    }
    const isUser = await verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401).send("SESSION_NO_VALIDA");
    } else {
      req.user = isUser;
      console.log({ isUser });
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(401).send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
