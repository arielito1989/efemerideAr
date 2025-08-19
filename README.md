# Efemérides Argentinas

Este proyecto es una simple página web que muestra una efeméride argentina para el día actual.

## Funcionalidades

- Muestra la efeméride correspondiente al día actual.
- Incluye una imagen relacionada con la efeméride.
- Reproduce el himno nacional argentino.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

---

##  Roadmap de Mejoras

Aquí se documentan los próximos pasos para mejorar y evolucionar el proyecto.

- [x] **1. Refactorizar la Gestión de Datos:**
    - [x] Mover los datos de efemérides desde `config.js` a un nuevo archivo `efemerides.json`.
    - [x] Mover los datos de logros destacados desde `logros_destacados.js` a un nuevo archivo `logros.json`.
    - [x] Actualizar `script.js` para cargar los datos de forma asíncrona usando `fetch()`.

- [x] **2. Mejorar la Lógica de JavaScript (`script.js`):**
    - [x] Implementar un manejo de errores para cuando no se encuentre una efeméride para la fecha actual.
    - [x] Refactorizar el código en funciones más pequeñas y reutilizables para mejorar la legibilidad.

- [x] **3. Mejorar el Diseño y la Experiencia de Usuario (`style.css`):**
    - [x] Implementar un diseño responsive utilizando Flexbox o CSS Grid para una correcta visualización en dispositivos móviles.
    - [x] Mejorar el contraste y la legibilidad del texto.
    - [x] Añadir transiciones suaves para la aparición de elementos.
    - [x] Personalizar el estilo del reproductor de audio.

- [x] **4. Mejorar la Estructura HTML (`index.html`):**
    - [x] Utilizar etiquetas semánticas de HTML5 (`<main>`, `<section>`, `<article>`, `<figure>`) para mejorar la estructura y accesibilidad.

---

## Roadmap de Mejoras UX/UI

Una vez completada la estructura y funcionalidad base, nos enfocaremos en refinar la experiencia de usuario con mejoras visuales y de interacción.

- [x] **1. Animaciones y Microinteracciones Sutiles:**
    - [x] Añadir transiciones suaves para la aparición del contenido al hacer clic en el botón.
    - [x] Implementar efectos `hover` en los elementos de la lista "Logros Destacados" para mejorar la interactividad.

- [x] **2. Jerarquía Visual y Tipografía:**
    - [x] Ajustar el estilo del título "Logros Destacados" para darle más importancia visual.
    - [x] Integrar una combinación de fuentes desde Google Fonts para una estética más profesional.

- [x] **3. Pulido de Interfaz:**
    - [x] Enriquecer el mensaje de "estado vacío" (cuando no hay efeméride) con un icono o un diseño más elaborado.
