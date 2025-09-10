# CursoresVirtuales

Aplicación de código abierto para crear y controlar cursores virtuales invisibles desde cualquier lenguaje, mediante una API universal.  
Incluye interfaz en español, visualización de código fuente y documentación de la API.

## Instalación

1. Instala Node.js y npm.
2. Clona el repositorio.
3. Instala dependencias: `npm install`
4. Inicia la app: `npm start`

## Uso de la API

```http
POST /cursor
Content-Type: application/json

{
  "pid": 1234,
  "accion": "mover", // o "click"
  "x": 100,
  "y": 200
}
```

## Ejemplo en Python

```python
import requests
requests.post("http://localhost:3001/cursor", json={
  "pid": 1234,
  "accion": "mover",
  "x": 100, "y": 200
})
```

## Ejemplo en JavaScript

```javascript
fetch("http://localhost:3001/cursor", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ pid: 1234, accion: "click" })
});
```

## Código fuente

Puedes ver el código fuente desde la propia aplicación (pestaña "Código Fuente") o en el repositorio.

## Licencia

MIT
