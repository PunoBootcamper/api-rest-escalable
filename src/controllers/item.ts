import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCars();
    res.send(responseItems);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await getCar(req.params.id);
    const data = responseItem ? responseItem : "ITEM_NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await updateCar(req.params.id, req.body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await deleteCar(req.params.id);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItems, getItem, updateItem, postItem, deleteItem };
