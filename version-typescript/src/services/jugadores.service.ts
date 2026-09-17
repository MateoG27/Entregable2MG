// src/services/jugadores.service.ts

import { jugadores } from "../data/jugadores.js";
import type { JugadorNBA, NuevoJugador, ActualizacionJugador, Posicion } from "../tipos.js";
import { ApiError } from "../apiError.js";

// Simulamos el comportamiento de una base de datos real autoincrementando el ID
let siguienteId = jugadores.length + 1;

export function listarJugadores(posicion?: Posicion): JugadorNBA[] {
  if (!posicion) return jugadores;
  return jugadores.filter((jugador) => jugador.posicion === posicion);
}

export function buscarJugadorPorId(id: number): JugadorNBA {
  const jugador = jugadores.find((j) => j.id === id);
  if (!jugador) {
    throw new ApiError(404, `Jugador con id ${id} no encontrado`);
  }
  return jugador;
}

export function crearJugador(datos: NuevoJugador): JugadorNBA {
  // Validación básica de negocio
  if (!datos.nombre || !datos.equipo || !datos.posicion || !datos.rareza) {
    throw new ApiError(400, "Faltan campos obligatorios para crear el jugador");
  }

  const nuevoJugador: JugadorNBA = {
    id: siguienteId,
    ...datos,
  };

  siguienteId += 1;
  jugadores.push(nuevoJugador);
  return nuevoJugador;
}

export function actualizarJugador(id: number, cambios: ActualizacionJugador): JugadorNBA {
  const jugador = buscarJugadorPorId(id); // Reutilizamos la función para validar que exista
  const actualizado: JugadorNBA = { ...jugador, ...cambios, id: jugador.id };

  const indice = jugadores.findIndex((j) => j.id === id);
  jugadores[indice] = actualizado;
  return actualizado;
}

export function eliminarJugador(id: number): void {
  const indice = jugadores.findIndex((j) => j.id === id);
  if (indice === -1) {
    throw new ApiError(404, `Jugador con id ${id} no encontrado`);
  }
  jugadores.splice(indice, 1);
}