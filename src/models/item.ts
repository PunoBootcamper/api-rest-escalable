import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    color: { type: String, required: true },
    gas: { type: String, enum: ["gasoline", "diesel"], required: true },
    year: { type: Number },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);

export default ItemModel;
