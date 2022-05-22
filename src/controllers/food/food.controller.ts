import { Request, Response } from 'express';

import { Food } from "../../models/";

export const addFood = async (req: Request, res: Response) => {
  try {
    const food = new Food(req.body);
    await food.save();
    const payload = {
      food: { id: food.id }
    };

    if (payload) return res.status(200).json({ message: "Food added" });
    return res.status(400).json({ message: "Failed to add food" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getFoodList = async (_req: Request, res: Response) => {
  try {
    const food = await Food.find().lean();
    return res.status(200).json({ message: "success", payload: food });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}