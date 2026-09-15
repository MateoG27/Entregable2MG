# Proyecto: Analizador de Dúos Dinámicos de la NBA

## 1. Intención Inicial y Reglas de Negocio
**Idea del mini-proyecto:** 
Un simulador que carga estadísticas de jugadores de baloncesto de forma asíncrona, filtra candidatos por posición y combina a dos de ellos al azar para diagnosticar la química y el poder general del dúo resultante.

**Restricciones:**
* El catálogo solo acepta jugadores con las 5 posiciones oficiales (Base, Escolta, Alero, Ala-Pívot, Pívot).
* Cada carta de jugador tiene una estructura estricta con estadísticas agrupadas (puntos, rebotes, asistencias).
* El sistema captura errores sin colapsar si se intenta analizar un jugador corrupto o inexistente.

**Criterios de aceptación:**
* Uso de Promesas para simular el tiempo de búsqueda asíncrona no bloqueante.
* Uso de funciones de orden superior (`filter`, `reduce`) para analizar el catálogo.
* Uso de *destructuring* y *spread operator* para crear el dúo híbrido sin mutar los datos originales.

---

## 2. Instrucciones de Ejecución

### Para la versión JavaScript:
Abre la terminal y ejecuta los siguientes comandos:
1. Entrar a la carpeta: `cd version-javascript`
2. Iniciar el simulador: `npm start`

### Para la versión TypeScript:
Abre la terminal y ejecuta los siguientes comandos:
1. Entrar a la carpeta: `cd version-typescript`
2. Instalar dependencias (TypeScript): `npm install`
3. Compilar y ejecutar: `npm run dev`

---

## 3. Decisiones de Tipado (TypeScript)
Para blindar el simulador, se implementaron las siguientes estructuras en `src/tipos.ts`:

* **Uniones Literales (`Posicion` y `Rareza`):** Actúan como un candado de seguridad. Al limitar la posición estrictamente a valores como `"Base"` o `"Alero"`, el compilador detecta inmediatamente cualquier error tipográfico y evita que se ingresen posiciones inválidas.
* **Interface Anidada (`EstadisticasJugador`):** Agrupa lógicamente las estadisticas (puntos, rebotes, asistencias) para mantener el código ordenado y hacer más facil el *destructuring*.
* **Interface Principal (`JugadorNBA`):** Define el molde exacto que debe tener cada carta. Si a un jugador le falta un campo o tiene un tipo de dato incorrecto, el programa no compilará, lo que ayuda a la integridad de los datos.