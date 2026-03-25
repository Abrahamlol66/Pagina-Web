# ARBT Digital Enterprise - Consultoría Web

## 🚀 Objetivo del Proyecto
ARBT Digital Enterprise es una plataforma web diseñada para una agencia de consultoría digital. El objetivo principal es proporcionar una presencia profesional en línea que permita presentar servicios de desarrollo web, gestión de servidores y soporte técnico, además de capturar clientes potenciales a través de un sistema de contacto inteligente.

## 🛠️ Tecnologías Utilizadas
- **HTML5**: Estructura semántica y accesible.
- **CSS3**: Diseño moderno, responsivo y animaciones personalizadas (sin librerías externas).
- **JavaScript (Vanilla)**: Lógica dinámica, validación de formularios y manipulación del DOM.
- **TimeAPI**: Integración con API externa para obtener la hora oficial.
- **Supabase Auth**: Autenticación segura para el panel de administración.
- **LocalStorage**: (En transición) Persistencia temporal para el registro de peticiones.

## 📂 Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
- `/index.html`: Página de inicio y punto de entrada principal.
- `/donas/`: Punto de acceso secreto para administradores.
- `/css/`: Archivos de estilos:
  - `main.css`: Estilos globales.
  - `admin.css`: Estilos para login y panel administrativo.
  - `peticiones.css`, `contacto.css`, etc.: Estilos específicos por página.
- `/js/`: Lógica de negocio y funcionalidades:
  - `admin-auth.js`: Gestión de sesiones con Supabase.
  - `main.js`: Lógica global y navegación.
- `/pages/`: Directorio de páginas secundarias:
  - `servicios.html`, `sobre.html`, `contacto.html`.
  - `/admin/peticiones.html`: Panel administrativo protegido.

## 💡 Funcionalidades Clave

### 1. Acceso Administrativo Secreto
Para mayor seguridad, el panel administrativo no es visible en la navegación pública. El acceso se realiza exclusivamente a través de la URL `/donas`, la cual presenta un formulario de inicio de sesión protegido por **Supabase Auth**.

### 2. Sistema de Contacto Inteligente
El formulario de contacto valida los datos del usuario y utiliza una API externa para registrar el momento exacto de la solicitud, asegurando marcas de tiempo precisas e inalterables.

### 3. Persistencia de Datos (En Transición)
Actualmente, la persistencia local ha sido desactivada para preparar la migración hacia una arquitectura backend desacoplada. El backend gestionará el almacenamiento permanente en la plataforma **Supabase**.

### 4. Seguridad y UX
- **Protección de Rutas**: Las páginas dentro de `/pages/admin/` requieren una sesión activa; de lo contrario, el sistema redirige al acceso secreto.
- **Diseño Responsivo**: Totalmente optimizado para dispositivos móviles con un menú interactivo y fluido.

---
© 2026 ARBT Digital Enterprise. Desarrollado con enfoque en rendimiento, orden y escalabilidad.
