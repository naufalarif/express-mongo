import mongoose from 'mongoose';
import { Food } from '../types';

const { Schema } = mongoose;

const FoodScheme = new Schema<Food>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  date_created: { type: Date, required: true },
});

const FoodModel = mongoose.model("Food", FoodScheme);
export default FoodModel;
