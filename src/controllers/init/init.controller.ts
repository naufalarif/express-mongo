import { Request, Response } from 'express';

const PORT = process.env.PORT || 4000;

export const Home = async (_req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: 'Works!' });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}

export const Init = async (_req: Request, _res: Response) => {
  try {
    console.log(`running at ${PORT}`);
  } catch (err) {
    console.log('error: ', err);
  }
}