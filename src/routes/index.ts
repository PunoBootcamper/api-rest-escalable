import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
  return fileName.split(".").shift();
};

readdirSync(PATH_ROUTER).forEach((file) => {
  const cleanName = cleanFileName(file);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Adding router /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
