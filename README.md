
# IonicApp

Este es un proyecto de ejemplo creado con Ionic y Angular. La aplicación incluye varias funcionalidades, desde la gestión de usuarios hasta la personalización de elementos de la interfaz.

## Descripción del Proyecto

- **Diapositivas Personalizadas:** Crea y personaliza múltiples slides con tu propio diseño.
- **Navegación:** Acceso fácil entre las secciones de la app con botones, iconos o enlaces.
- **Autenticación:** Formulario de login con campo de contraseña y diversas validaciones.
- **Validaciones:** Mensajes de validación para asegurar la correcta entrada de datos en los formularios.
- **Ocultación de Contraseña:** Funcionalidad para alternar la visibilidad de la contraseña.
- **Gestión de Sesiones:** Manejo seguro de la sesión de usuario para evitar accesos no autorizados.

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) v14.x o superior
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Angular](https://angular.io/)

## Instrucciones de Instalación

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/DeisonBM/IonicApp.git
   ```

2. **Instalar las Dependencias:**

   ```bash
   cd IonicApp
   npm install
   ```

## Cómo Ejecutar la Aplicación

1. **Iniciar el Servidor de Desarrollo:**

   ```bash
   ionic serve
   ```

2. **Abrir la Aplicación:** Accede en tu navegador a `http://localhost:8100` para ver la aplicación en funcionamiento.

## Servicios Disponibles

- **Lista de Artistas:**  
  Endpoint: `https://music.fly.dev/artists`  
  Descripción: Recupera una lista de artistas disponibles.

## Estilización y Personalización

- **Estilos Personalizados:** Implementa tu propio estilo en las diapositivas.
- **Propiedades Customizadas:** Modificación de propiedades CSS personalizadas.
- **Utilidades CSS:** Aplicación de al menos tres utilidades CSS en la app.

## Seguridad y Validaciones

- **Validaciones de Contraseña:** Asegura que la contraseña cumpla con los requisitos necesarios.
- **Validaciones de Registro:** Mensajes de validación específicos para todos los campos de registro.
- **Ocultar/Mostrar Contraseña:** Botón para alternar la visibilidad de la contraseña.

## Manejo de Sesiones

- **Cerrar Sesión:** Una vez que el usuario cierra sesión, no puede acceder al menú principal, garantizando la seguridad de la app.

## Contribuir al Proyecto

Si te gustaría contribuir, sigue estos pasos:

1. Realiza un **fork** del repositorio.
2. Crea una nueva **branch**: `git checkout -b tu-nueva-rama`.
3. Realiza tus cambios y haz un **commit**: `git commit -m 'Descripción de tus cambios'`.
4. **Push** a la rama: `git push origin tu-nueva-rama`.
5. Abre un **Pull Request**.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

