// src/controllers/jugadores.controller.ts

import type { Request, Response, NextFunction } from "express";
import * as jugadoresService from "../services/jugadores.service.js";
import type { Posicion } from "../tipos.js";
import { ApiError } from "../apiError.js";

export function listar(req: Request, res: Response, next: NextFunction): void {
  try {
    const posicion = req.query.posicion as Posicion | undefined;
    const resultado = jugadoresService.listarJugadores(posicion);
    res.json({ total: resultado.length, jugadores: resultado, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function obtenerPorId(req: Request, res: Response, next: NextFunction): void {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      throw new ApiError(400, `"${req.params.id}" no es un ID válido`);
    }
    const jugador = jugadoresService.buscarJugadorPorId(id);
    res.json({ jugador, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function crear(req: Request, res: Response, next: NextFunction): void {
  try {
    const nuevoJugador = jugadoresService.crearJugador(req.body);
    res.status(201).json({ jugador: nuevoJugador, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function actualizar(req: Request, res: Response, next: NextFunction): void {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      throw new ApiError(400, `"${req.params.id}" no es un ID válido`);
    }
    const actualizado = jugadoresService.actualizarJugador(id, req.body);
    res.json({ jugador: actualizado, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function eliminar(req: Request, res: Response, next: NextFunction): void {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      throw new ApiError(400, `"${req.params.id}" no es un ID válido`);
    }
    jugadoresService.eliminarJugador(id);
    res.status(204).send(); // 204 No Content: éxito al eliminar, sin cuerpo de respuesta.
  } catch (error) {
    next(error);
  }
}