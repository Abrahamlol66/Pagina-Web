# ARBT Digital Enterprise - Consultoría Web

## 🚀 Objetivo del Proyecto
ARBT Digital Enterprise es una plataforma web diseñada para una agencia de consultoría digital. El objetivo principal es proporcionar una presencia profesional en línea que permita presentar servicios de desarrollo web, gestión de servidores y soporte técnico, además de capturar clientes potenciales a través de un sistema de contacto inteligente.

## 🛠️ Tecnologías Utilizadas
- **HTML5**: Estructura semántica y accesible.
- **CSS3**: Diseño moderno, responsivo y animaciones personalizadas (sin librerías externas).
- **JavaScript (Vanilla)**: Lógica dinámica, validación de formularios y manipulación del DOM.
- **TimeAPI**: Integración con API externa para obtener la hora oficial y evitar manipulaciones locales.
- **LocalStorage**: Persistencia de datos en el navegador para el registro de peticiones.

## 📂 Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
- `/index.html`: Página de inicio y punto de entrada principal.
- `/css/`: Contiene los archivos de estilos divididos por componentes y páginas.
- `/js/`: Contiene la lógica de negocio y funcionalidades interactivas.
- `/pages/`: Directorio que contiene las páginas secundarias:
  - `servicios.html`: Detalle de la oferta comercial.
  - `sobre.html`: Información sobre la empresa y visión.
  - `contacto.html`: Formulario de captura de clientes.
  - `peticiones.html`: Panel de administración para visualizar solicitudes recibidas.

## 💡 Funcionalidades Clave

### 1. Sistema de Contacto Inteligente
El formulario de contacto no solo valida los datos del usuario, sino que también utiliza una API externa para registrar el momento exacto de la solicitud. Esto asegura que la marca de tiempo sea precisa e independiente del dispositivo del usuario.

### 2. Persistencia de Datos
Las solicitudes enviadas a través del formulario de contacto se almacenan localmente en el navegador utilizando `localStorage`. Esto permite que la página de `peticiones.html` muestre un historial de todas las interacciones sin necesidad de una base de datos en el servidor.

### 3. Diseño Responsivo y UX
El sitio está optimizado para dispositivos móviles mediante un menú hamburguesa interactivo y un diseño fluido que se adapta a cualquier tamaño de pantalla.

### 4. Lógica de Negocio Centralizada (`peticiones.js`)
Este archivo gestiona el modelo de datos `Usuario`, la comunicación con la API de tiempo y las operaciones de lectura/escritura en el almacenamiento local, siguiendo principios de programación orientada a objetos.

---
© 2026 ARBT Digital Enterprise. Desarrollado con enfoque en rendimiento y escalabilidad.
