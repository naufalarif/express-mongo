import { Response } from "express";

export const handleResponseFailed = (res: Response, err: any, status: number,  message: string) => {
  const errMessage = err ? err : '';
  console.log(err);
  return res.status(status).json({ status, error: errMessage, message });
};