// src/index.ts

import "dotenv/config";
import { crearApp } from "./app.js";

const PUERTO = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = crearApp();

app.listen(PUERTO, () => {
  console.log(`API de Jugadores NBA escuchando en http://localhost:${PUERTO}`);
  console.log(`Prueba: GET http://localhost:${PUERTO}/api/jugadores`);
});