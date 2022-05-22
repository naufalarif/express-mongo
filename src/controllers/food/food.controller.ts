import { Request, Response } from 'express';

import { Food } from "../../models/";
import { handleResponseFailed } from '../../utils';

export const addFood = async (req: Request, res: Response) => {
  try {
    const data = {
      ...req.body,
      date_created: Date.now(),
    }
    const food = new Food(data);
    await food.save();
    const payload = {
      food: { id: food.id }
    };

    if (payload) return res.status(200).json({ status: 200, message: "Food added" });
    return handleResponseFailed(res, null, 404, "Failed to add food");
  } catch (err) {
    return handleResponseFailed(res, err, 500, "Server error");
  }
};

export const getFoodList = async (_req: Request, res: Response) => {
  try {
    const food = await Food.find().lean();
    return res.status(200).json({ status: 200, message: "success", payload: food });
  } catch (err) {
    return handleResponseFailed(res, err, 500, "Server error");
  }
};

export const getDetailFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);

    if (!food) return handleResponseFailed(res, null, 404, "Food not found");
    return res.status(200).json({ status: 200, message: "success", payload: food })
  } catch (err: any) {
    const errMsg = err ? err.message : err;
    return handleResponseFailed(res, errMsg, 500, "Food not found");
  }
}

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    if (!food) return handleResponseFailed(res, null, 404, "Food not found");
    await Food.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    return res.status(200).json({ status: 200, message: "Food updated" });
  } catch (err) {
    return handleResponseFailed(res, err, 500, "Server error");
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    if (!food) return handleResponseFailed(res, null, 404, "Food not found");
    await food.deleteOne({ id: req.params.id });

    return res.status(200).json({ status: 200, message: "Food deleted" });
  } catch (err) {
    return handleResponseFailed(res, err, 500, "Server error");
  }
};