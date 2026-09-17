// src/middlewares/requestId.ts
import type { Request, Response, NextFunction } from "express";
import crypto from "crypto"; // Módulo nativo de Node, no requiere instalación

// ¡Esta es la magia que elimina tu línea roja!
// Extendemos la interfaz Request de Express para que TS reconozca req.id
declare global {
  namespace Express {
    interface Request {
      id: string;
    }
  }
}

export function requestId(req: Request, res: Response, next: NextFunction): void {
  req.id = crypto.randomUUID();
  res.setHeader("X-Request-Id", req.id);
  next(); 
}