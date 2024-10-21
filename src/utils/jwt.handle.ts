import "dotenv/config";
import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "1d" });
  return jwt;
};

const verifyToken = async (jwt: string) => {
  const decoded = verify(jwt, JWT_SECRET);
  return decoded;
};

export { generateToken, verifyToken };
