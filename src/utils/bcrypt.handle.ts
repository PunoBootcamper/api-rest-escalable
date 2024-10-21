import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const salt = 10;
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const verified = async (password: string, hashedPassword: string) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};

export { encrypt, verified };
