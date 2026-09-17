# Pruebas Manuales de la API con Thunder Client

A continuación, se documentan las peticiones y respuestas para validar el funcionamiento del CRUD y el manejo de errores de la API de Jugadores NBA.

## 1. Crear un Jugador (POST)
**Endpoint:** `POST /api/jugadores`

**Cuerpo enviado (JSON):**
```json
{
  "nombre": "Kevin Durant",
  "equipo": "Suns",
  "posicion": "Alero",
  "rareza": "Leyenda",
  "estadisticas": { 
    "puntos": 27.1,
    "rebotes": 6.6, 
    "asistencias": 5.0 
  }
}

**Respuesta Recibida (201 Created):**
{
  "jugador": {
    "id": 8,
    "nombre": "Kevin Durant",
    "equipo": "Suns",
    "posicion": "Alero",
    "rareza": "Leyenda",
    "estadisticas": {
      "puntos": 27.1,
      "rebotes": 6.6,
      "asistencias": 5
    }
  },
  "requestId": "bf30eacc-89a2-4fac-8989-667405363f6d"
}

## 2. Actualizar un Jugador (PUT)
**Endpoint:** `PUT /api/jugadores/8`

**Cuerpo enviado (JSON):**
{
  "equipo": "Rockets"
}

**Respuesta Recivida (200 OK)**

{
  "jugador": {
    "id": 8,
    "nombre": "Kevin Durant",
    "equipo": "Rockets",
    "posicion": "Alero",
    "rareza": "Leyenda",
    "estadisticas": {
      "puntos": 27.1,
      "rebotes": 6.6,
      "asistencias": 5
    }
  },
  "requestId": "777517d9-75f2-4d41-a223-35b611862e03"
}

## 3. Eliminar un Jugador (DELETE)
**Endpoint:** `DELETE /api/jugadores/8`

**Cuerpo enviado: (Vacío)**

**Respuesta recibida (204 No Content):**
(Cuerpo de respuesta vacío, lo que confirma la eliminación exitosa)


## 4. Manejo de Errores: Recurso no encontrado (404)
**Endpoint:** `GET /api/jugadores/888`

**Respuesta recibida (404 Not Found):**
{
  "error": "Jugador con id 888 no encontrado",
  "requestId": "7f98ad3f-1dd0-4c54-b2b2-3248e9e5b7aa"
}


## 5. Manejo de Errores: Petición inválida (400)
**Endpoint:** `POST /api/jugadores`

**Cuerpo enviado (JSON):**
{}

**Respuesta Recibida (Bad Request):**
{
  "error": "Faltan campos obligatorios para crear el jugador",
  "requestId": "0b437f73-0335-4ce5-99dd-d8808f3d3957"
}