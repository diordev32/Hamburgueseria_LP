# **El Rincón de la Hamburguesa 🍔**  
**E-commerce para pedidos de hamburguesas con integración de pagos simulados.**  

## Tabla de Contenido
- [Estado del Proyecto](#estado-del-proyecto)
- [Descripción](#descripción)
- [Objetivos del Proyecto](#objetivos-del-proyecto)
- [Tecnologías](#tecnologías)
- [Cronograma de Trabajo](#cronograma-de-trabajo)
- [Flujo de Trabajo con Ramas](#flujo-de-trabajo-con-ramas)
- [Documentación](#documentación)
- [Estructura Inicial del Proyecto](#estructura-inicial-del-proyecto)




## 🚀 **Estado del Proyecto**  
📌 **Fase actual:** Fase 3: Desarrollo  
📌 **Próximos pasos:** Desarrollar los componentes principales (React)  

---

## 📖 **Descripción**  
*"El Rincón de la Hamburguesa"* será un e-commerce básico donde los clientes podrán ver el menú, seleccionar productos y realizar pedidos de manera rápida y sencilla.  

El objetivo principal es ofrecer una experiencia intuitiva y accesible, manteniendo un diseño atractivo y optimizado.  

---

## 🎯 **Objetivos del Proyecto**  

- Crear una **interfaz simple** y **rápida** para realizar pedidos.  
- Implementar un **sistema de carrito** con opción para modificar cantidades antes de confirmar la compra.  
- Integrar **pagos simulados con Mercado Pago** para facilitar las transacciones.  
- Diseñar una **experiencia visual atractiva** basada en el branding del negocio.  

---

## 🛠️ **Tecnologías**  

🔹 **Frontend:** HTML, CSS, React, Vite.  

🔹 **Backend:** Simulación con Json Server.  

🔹 **Pasarela de pago:** Mercado Pago API. 

🔹 **Diseño:** Figma (wireframes), Excalidraw (diagramas).

🔹 **Desarrollo y versionado:** Git, Github, GitFlow


---

## 🗺️ **Cronograma de Trabajo**  

🔹 **Fase 1 - Planificación**  

- Definir el propósito y objetivos del sitio web
- Establecer el público objetivo
- Establecer el alcance del proyecto
- Establecer tecnologías y herramientas a utilizar
- Crear el WDD (Documento de Diseño Web)
- Crear tablero de Trello
- Crear repositorio en GitHub y subir la documentación
- Crear un archivo Readme.md inicial para el repositorio


🔹 **Fase 2 - Diseño**

- Crear el branding de “El rincón de la hamburguesa”:
    - Definir ambiente de la marca
    - Definir paleta de colores
    - Definir tipografía
    - Definir el menú


🔹 **Fase 3 - Desarrollo**

- Configurar el entorno de desarrollo (Repositorio, herramientas, etc…)
- Desarrollar los componentes principales (React)
- Implementar las funcionalidades del front-end (formulario, navegación, etc..)
- Desarrollar la lógica del back end (Json Server) y el carrito de compras
- Integración con Mercado Pago
- Implementar seguridad básica (validación de entrada)
- Implementar el estilo al sitio web (colores, imágenes, tipografía, etc…)


🔹 **Fase 4 - Pruebas**

- Pruebas funcionales (Verificar la interacción del usuario, como el flujo de pedidos)
- Revisión de compatibilidad con diferentes navegadores y dispositivos
- Pruebas de rendimiento y carga
- Identificación y corrección de errores
- Validación de accesibilidad (Cumplimientos de estándares A11y)


🔹 **Fase 5 - Despliegue**

- Configuración del servidor (Ver cual)
- Despliegue del código al servidor
- Verificación de funcionamiento post-despliegue
- Monitoreo inicial y solución de posibles problemas


🔹 **Fase 6 - Mantenimiento y actualización**

- Monitorear el rendimiento del sitio
- Actualización de tecnologías
- Agregar un back-end real
- Implementación de nuevas funcionalidades o mejoras
- Aplicar la metodología de mejora continua en el sitio




---

## 🚀 **Flujo de Trabajo con Ramas**  

El desarrollo seguirá una estructura basada en **GitFlow**:  

- **main** → Versión estable y en producción.  
- **develop** → Desarrollo activo.  
- **feature*** → Ramas para nuevas funcionalidades.  
- **hotfix*** → Correcciones urgentes.  

```txt
│── main                    # Versión estable en producción  
    │── develop             # Desarrollo activo  
        │── feature         # Funcionalidades nuevas
        │── hotfix          # Corecciones urgentes 

```

## 📜 Documentación  

Este proyecto sigue un **Web Design Document (WDD)** que define su estructura, diseño y funcionalidades.  

Resumen del WDD:  
- **Objetivo:** Crear un e-commerce de hamburguesas con una experiencia rápida y amigable.  
- **Público objetivo:** Familias, trabajadores y jóvenes.  
- **Funcionalidades clave:**  
  - Catálogo de hamburguesas y extras.  
  - Pedido rápido con pop-up para modificar el carrito.  
  - Integración con Mercado Pago.  
  - Sección de testimonios (gestionada manualmente).  
- **Diseño:**  
  - Estilo cálido y cercano.  
  - Colores principales: rojo, amarillo, negro y blanco.  
  - Tipografías: Oswald/Poppins para títulos, Roboto/Open Sans para texto.  

Para más detalles, consulta el 📄 [WDD completo](/docs/WDD%20-%20El%20Rincón%20de%20la%20hamburguesa%20.pdf).



___
## 📂 **Estructura de Carpetas**  

Decidí utilizar una estructura basada en features para este proyecto.


```txt
/Hamburguesa_LP
│── docs/                # Documentación del proyecto   
│── src/                 # Código fuente (a definir) 
│    │── assets/         # Recursos
│           │── images/  # Imagenes del sitio
│── data/                # Base de datos (archivo Json)
│── feature/             # En esta carpeta estará cada feature con su carpeta propia