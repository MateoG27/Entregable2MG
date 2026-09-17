// src/app.ts

import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import { requestId } from "./middlewares/requestId.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { jugadoresRouter } from "./routes/jugadores.routes.js";
import { ApiError } from "./apiError.js";

export function crearApp(): Express {
  const app = express();

  app.use(express.json());
  app.use(requestId);
  app.use(logger);

  // Ruta de salud básica
  app.get("/api/salud", (req: Request, res: Response) => {
    res.json({ estado: "ok", requestId: req.id });
  });

  // Conectamos el mapa de rutas de los jugadores
  app.use("/api/jugadores", jugadoresRouter);

  // Si la ruta no existe, forzamos un error 404
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(404, `Ruta no encontrada: ${req.method} ${req.originalUrl}`));
  });

  // El manejador de errores SIEMPRE va al final
  app.use(errorHandler);

  return app;
}