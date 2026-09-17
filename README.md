# Jugadores NBA API

API REST temática de un catálogo de jugadores de la NBA. Construida con Node.js, Express y TypeScript, usando datos en memoria (sin base de datos)[cite: 27].

## Tema

El recurso principal es el **JugadorNBA**, con los siguientes campos[cite: 27]:

* `id` : identificador único
* `nombre` : nombre del jugador
* `equipo` : franquicia a la que pertenece
* `posicion` : `"Base"` | `"Escolta"` | `"Alero"` | `"Ala-Pívot"` | `"Pívot"`
* `rareza` : `"Común"` | `"Rara"` | `"Leyenda"`
* `estadisticas` : objeto anidado con `puntos`, `rebotes` y `asistencias`

## Estructura del proyecto

```text
src/
├── controllers/
│   └── jugadores.controller.ts  # maneja req/res de cada endpoint
├── data/
│   └── jugadores.ts             # base de datos en memoria
├── middlewares/
│   ├── errorHandler.ts          # manejo centralizado de errores
│   ├── logger.ts                # logging de cada request
│   └── requestId.ts             # asigna UUID único a peticiones
├── routes/
│   └── jugadores.routes.ts      # define las rutas REST
├── services/
│   └── jugadores.service.ts     # lógica de negocio
├── apiError.ts                  # clase de error HTTP personalizada
├── app.ts                       # ensamblaje de la aplicación y middlewares
├── index.ts                     # punto de entrada, arranca el servidor
└── tipos.ts                     # tipos e interfaces del dominio

## Instalación:
npm install

## Ejecución
Modo desarrollo (con recarga automática):
npm run dev

## Compilar a JavaScript:
npm build

## Ejecutar la versión compilada:
npm start

**El servidor corre por defecto en http://localhost:3000**


# Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | /jugadores | Lista de todos los jugadores |
| GET | /jugadores/:id | Obtiene un jugador por su id |
| POST | /jugadores | Crea un nuevo jugador |
| PUT | /jugador/:id | Actualiza un jugador existente |
| DELETE | /jugador/:id | Elimina un jugador |

Ejemplos de request/response de cada endpoint, incluyendo casos de error, están documentados en [requests.md](./requests.md).

## Middlewares
* Request ID: asigna un identificador único (UUID) a cada petición antes de ser procesada para facilitar el rastreo.

* Logger: registra método, ruta, id de petición y duración de cada request de forma no bloqueante.

* Manejo centralizado de errores: captura errores lanzados con next(error) en cualquier capa y responde con un JSON consistente ({ error: mensaje, requestId: id }) y el código HTTP correspondiente
