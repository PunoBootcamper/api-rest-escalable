import { Request, Response, Router } from "express";
import { registerController, loginController } from "../controllers/auth";

const router = Router();

router.post("/register", registerController);

router.post("/login", loginController);

export { router };
