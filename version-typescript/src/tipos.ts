// src/tipos.ts

// Uniones Literales
export type Posicion = "Base" | "Escolta" | "Alero" | "Ala-Pívot" | "Pívot";
export type Rareza = "Común" | "Rara" | "Leyenda";

// Interface Anidada
export interface EstadisticasJugador {
  puntos: number;
  rebotes: number;
  asistencias: number;
}

// Interface Principal (Cumple el requisito de mínimo 5 campos tipados)
export interface JugadorNBA {
  id: number;
  nombre: string;
  equipo: string;
  posicion: Posicion;
  rareza: Rareza;
  estadisticas: EstadisticasJugador;
}

// Tipo utilitario Omit: Usado al CREAR un jugador.
// Copia toda la estructura de JugadorNBA, pero omite el "id" porque 
// el backend va a ser el responsable de asignarlo, no el cliente.
export type NuevoJugador = Omit<JugadorNBA, "id">;

// Tipo utilitario Partial: Usado al ACTUALIZAR un jugador.
// Vuelve opcionales todos los campos de NuevoJugador. Así se puede recibir
// una petición que solo modifique los puntos o el equipo, sin especificar  todo el objeto.
export type ActualizacionJugador = Partial<NuevoJugador>;