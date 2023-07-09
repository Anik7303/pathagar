import { NextFunction, Request, Response } from "express";

export const test = (
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const { url, method } = req;
  const message = `${url} configured correctly.`;

  res.status(200).json({ message, url, method, status: 200 });
};
