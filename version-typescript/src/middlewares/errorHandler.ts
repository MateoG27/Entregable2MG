// src/middlewares/errorHandler.ts

import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../apiError.js";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = err instanceof ApiError ? err.status : 500;
  const mensaje = err instanceof Error ? err.message : "Error interno del servidor";

  // Solo imprimimos en consola los errores graves (500)
  if (status === 500) {
    console.error(`[${new Date().toISOString()}] id=${req.id} ERROR:`, err);
  }

  res.status(status).json({
    error: mensaje,
    requestId: req.id,
  });
}