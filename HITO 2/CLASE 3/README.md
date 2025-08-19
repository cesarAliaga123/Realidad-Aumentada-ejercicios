# Practica 2 Hito 2
## Descripcion 
Pequeña demo AR con A-Frame + AR.js que usa la cámara web para detectar el marcador Hiro y mostrar un cubo 3D que:

 - gira continuamente,

 - puede moverse con el teclado,

 - cambia de color con un botón,

 - lleva un contador de detecciones del marcador.

Archivos:  

index.html

script.js

styles.css

 ### Requisitos

* Abrir en HTTPS o localhost (necesario para la cámara).

* Un servidor local simple (Live Server, python -m http.server, o http-server).

* Marcador Hiro impreso o en pantalla (por ejemplo: hiro.png de AR.js).

### Ejecutar
1. Coloca los tres archivos en una carpeta.

2. Inicia un servidor en esa carpeta
- Copiar la ruta de la carpeta y en la consola ingresar en la carpeta, utilizar el siguiente comando: python -m http.server 8000

3. Abre en el navegador http://localhost:8000 y permite la cámara.

4. Apunta el marcador Hiro a la cámara.

### Controles
- Mover: WASD o flechas (X/Z).

- Subir/Bajar: Q / E.

- Cambiar color: botón “Cambiar Color”.

### Notas
El cubo está anclado al marcador; su movimiento es relativo a él.

Si ves franjas o recortes, ajusta object-fit (CSS) o las resoluciones en el atributo arjs