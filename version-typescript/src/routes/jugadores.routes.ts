// src/routes/jugadores.routes.ts

import { Router } from "express";
import * as jugadoresController from "../controllers/jugadores.controller.js";

export const jugadoresRouter = Router();

// Endpoints CRUD
jugadoresRouter.get("/", jugadoresController.listar);
jugadoresRouter.get("/:id", jugadoresController.obtenerPorId);
jugadoresRouter.post("/", jugadoresController.crear);
jugadoresRouter.put("/:id", jugadoresController.actualizar);
jugadoresRouter.delete("/:id", jugadoresController.eliminar);