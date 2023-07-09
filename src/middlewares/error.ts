import { NextFunction, Request, Response } from "express";

export interface ErrorWithStatusCode extends Error {
  statusCode: number;
}

export function notFoundError(
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const { method, url } = req;
  const message = `${method.toUpperCase()} ${url} route does not exist.`;

  res.status(404).json({ status: 404, method, url, message });
}

export function catchAllError(
  error: ErrorWithStatusCode,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const { method, url } = req;
  const code = error.statusCode || 500;
  const message =
    error.message || "An unexpected error occured. Please try again.";

  res.status(code).json({ method, url, message, status: code });
}
