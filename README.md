# 🌱 ASOAGROPESCAM

### Sitio web institucional de la Asociación Agropecuaria y Pesquera de Campesinas de La Travesía de Mompós

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Git](https://img.shields.io/badge/Versionamiento-Git-F05032?logo=git&logoColor=white)](https://git-scm.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

**ASOAGROPESCAM** es un proyecto web institucional orientado a fortalecer la presencia digital de la asociación, divulgar su identidad organizacional, presentar sus líneas de trabajo y proyectos, y facilitar la comunicación con la comunidad y potenciales aliados.

---

## 📑 Tabla de contenido

1. [Descripción del proyecto](#-descripción-del-proyecto)
2. [Objetivos](#-objetivos)
3. [Identidad institucional](#-identidad-institucional)
4. [Funcionalidades](#-funcionalidades)
5. [Tecnologías y versiones](#-tecnologías-y-versiones)
6. [Arquitectura del proyecto](#-arquitectura-del-proyecto)
7. [Requisitos del entorno](#-requisitos-del-entorno)
8. [Instalación](#-instalación)
9. [Comandos de desarrollo](#-comandos-de-desarrollo)
10. [Compilación y producción](#-compilación-y-producción)
11. [Formulario de contacto](#-formulario-de-contacto)
12. [Despliegue en Netlify](#-despliegue-en-netlify)
13. [Control de versiones con Git](#-control-de-versiones-con-git)
14. [Seguridad y protección de datos](#-seguridad-y-protección-de-datos)
15. [Mantenimiento y mejoras](#-mantenimiento-y-mejoras)
16. [Información de contacto](#-información-de-contacto)
17. [Estado del proyecto](#-estado-del-proyecto)

---

## 🌿 Descripción del proyecto

ASOAGROPESCAM es una asociación vinculada al sector agropecuario y pesquero de la comunidad de La Travesía, Bolívar, Colombia.

Este proyecto busca desarrollar una plataforma web institucional que permita comunicar información sobre la asociación, su identidad, sus actividades productivas, sus iniciativas comunitarias y sus canales de contacto.

El sitio se construye con Angular, utilizando componentes independientes y hojas de estilos SCSS para organizar la interfaz y facilitar su mantenimiento.

La propuesta visual utiliza una identidad gráfica inspirada en la naturaleza, el campo, la sostenibilidad y el desarrollo rural.

## 🎯 Objetivos

### Objetivo general

Desarrollar una plataforma web institucional moderna, adaptable y mantenible para fortalecer la visibilidad digital de ASOAGROPESCAM y facilitar la comunicación con la comunidad, entidades y aliados estratégicos.

### Objetivos específicos

- Presentar la asociación y su contexto institucional.
- Comunicar su misión, visión, valores y principios.
- Divulgar las líneas de trabajo agropecuarias y pesqueras.
- Dar visibilidad a los proyectos y las iniciativas comunitarias.
- Promover alianzas y oportunidades de colaboración.
- Facilitar el contacto mediante un formulario web.
- Proporcionar una experiencia de navegación adaptable a distintos dispositivos.
- Mantener una estructura modular que permita futuras ampliaciones.

---

## 🧭 Identidad institucional

El sitio contempla una sección destinada a presentar los elementos institucionales de la asociación.

- **Misión:** propósito y compromiso institucional.
- **Visión:** proyección y objetivos a futuro.
- **Valores:** principios que orientan el trabajo y la participación.
- **Principios institucionales:** fundamentos para la actuación de la organización.
- **Política integrada:** contenido institucional aprobado por la asociación.

Los textos definitivos deben corresponder a las versiones oficiales aprobadas por ASOAGROPESCAM.

---

## 🖥️ Funcionalidades

### Inicio

Presentación principal de la asociación y navegación hacia las secciones del sitio.

### Nosotros

Introducción institucional y descripción del compromiso con el territorio.

### Nuestra identidad

Presentación de la misión, visión, valores, principios y política integrada.

### Qué hacemos

Divulgación de las líneas de trabajo y las actividades agropecuarias, pesqueras y comunitarias.

### Proyectos

Presentación de iniciativas de la asociación, entre ellas:

- **Proyecto de piscicultura:** iniciativa culminada relacionada con la producción acuícola.
- **Desarrollo agropecuario:** línea de trabajo para fortalecer las actividades productivas rurales.
- **Una Navidad llena de sonrisas:** iniciativa proyectada de recolección solidaria de juguetes para niños y niñas de la comunidad.

Los estados de los proyectos deben actualizarse según su ejecución real.

### Contacto

Formulario de contacto con campos para nombre, correo electrónico, teléfono, motivo de consulta, mensaje y autorización para el tratamiento de datos personales.

### Diseño adaptable

La interfaz contempla ajustes de presentación para computadores, tabletas y teléfonos móviles.

---

## 🧰 Tecnologías y versiones

Las siguientes versiones reúnen la información registrada durante el desarrollo. Se distingue entre las versiones conocidas de la configuración anterior y las versiones del entorno más reciente.

| Tecnología | Versión registrada | Uso |
|---|---|---|
| Angular | 22, según el historial más reciente del proyecto | Framework de interfaz |
| Angular CLI | Asociado a la versión actual del proyecto; verificar en `package.json` | Generación y compilación |
| Node.js | `v24.21.0`, registrada anteriormente | Entorno de ejecución |
| npm | `11.19.0`, registrada anteriormente | Gestión de dependencias |
| TypeScript | `~4.8.4` en la configuración anterior; verificar la actual | Lenguaje de desarrollo |
| RxJS | `~7.4.0` en la configuración anterior | Programación reactiva |
| Zone.js | `~0.11.4` en la configuración anterior | Detección de cambios en configuraciones que lo utilizan |
| Bootstrap | `^5.3.8` en la configuración anterior | Componentes y estilos, si continúa instalado |
| Font Awesome | `^7.2.0` en la configuración anterior | Iconografía, si continúa instalado |
| SCSS | Hojas de estilo `.scss` | Estilos y diseño visual |
| HTML5 | Estándar web | Estructura del contenido |
| Git | Versión instalada localmente | Control de versiones |
| GitHub | Servicio de alojamiento del código | Repositorio remoto |
| Netlify | Plataforma prevista para publicación | Despliegue y gestión de formularios |

**Nota técnica:** el proyecto tuvo una configuración anterior basada en Angular 15.2.x y posteriormente se registró que estaba funcionando con Angular 22. Las versiones de TypeScript, RxJS, Zone.js, Bootstrap y Font Awesome de la tabla corresponden a la configuración anterior y no deben considerarse confirmadas para Angular 22.

La fuente definitiva para las dependencias actuales es el archivo `package.json`, junto con las versiones instaladas y el archivo `package-lock.json`.

### Entorno de desarrollo

- Sistema operativo de trabajo: Windows.
- Editor recomendado: Visual Studio Code.
- Ruta local utilizada durante el desarrollo: `C:\Proyectos\asoagropescam`.
- Gestor de dependencias: npm.
- Control de versiones: Git.
- Repositorio remoto previsto: GitHub.
- Plataforma de despliegue prevista: Netlify.

---

## 🏗️ Arquitectura del proyecto

La aplicación utiliza una organización modular por componentes, separando los elementos compartidos de las secciones de la página principal.

### Estructura general

```text
asoagropescam/
├── public/
│   ├── images/
│   │   └── brand/
│   │       └── Logo-asoagropescam.png
│   └── __forms.html
│
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   │
│   │   └── pages/
│   │       └── home/
│   │           └── sections/
│   │               ├── hero/
│   │               ├── about/
│   │               ├── identity/
│   │               ├── action-lines/
│   │               ├── projects/
│   │               └── contact/
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Esta estructura es orientativa y refleja la organización conocida del proyecto. Los archivos adicionales pueden variar según la configuración actual de Angular.

### Responsabilidad de los componentes

| Componente | Responsabilidad |
|---|---|
| Header | Navegación principal y acceso a las secciones |
| Footer | Información institucional al final del sitio |
| Hero | Presentación visual principal |
| About | Introducción a la asociación |
| Identity | Información institucional |
| Action Lines | Líneas de trabajo |
| Projects | Presentación de proyectos |
| Contact | Datos de contacto y formulario |

Los componentes separan la estructura HTML, la lógica TypeScript y los estilos SCSS, facilitando las modificaciones por sección.

---

## ⚙️ Requisitos del entorno

Para ejecutar el proyecto se requiere:

- Node.js compatible con la versión actual de Angular.
- npm.
- Git.
- Visual Studio Code, recomendado.

Verifica las versiones instaladas:

```powershell
node --version
npm --version
git --version
npx ng version
```

Para consultar las dependencias declaradas:

```powershell
npm list --depth=0
```

La versión de Node.js debe ser compatible con la versión de Angular utilizada. Para garantizar la reproducibilidad, se recomienda registrar el entorno definitivo una vez verificado el proyecto actual.

---

## 📥 Instalación

### 1. Clonar el repositorio

Reemplaza `TU-USUARIO` por el usuario real de GitHub.

```bash
git clone https://github.com/TU-USUARIO/asoagropescam.git
```

### 2. Acceder al directorio

```bash
cd asoagropescam
```

### 3. Instalar las dependencias

```bash
npm ci
```

Se recomienda `npm ci` cuando el repositorio contiene un `package-lock.json` válido y actualizado, porque instala las dependencias conforme al archivo de bloqueo.

Si el proyecto no dispone de ese archivo, utiliza:

```bash
npm install
```

### 4. Abrir en Visual Studio Code

```bash
code .
```

---

## ▶️ Comandos de desarrollo

### Iniciar el servidor local

```bash
npx ng serve
```

Si `package.json` incluye un script `start`, también puede utilizarse:

```bash
npm start
```

Abre el navegador en:

`http://localhost:4200`

El servidor de desarrollo permite revisar los cambios de interfaz y estilos durante la construcción del sitio.

Para detenerlo, presiona `Ctrl + C` en la terminal.

### Consultar la configuración de Angular

```bash
npx ng version
```

Este comando permite revisar las versiones de Angular CLI, Angular y otras herramientas reconocidas por el entorno.

---

## 📦 Compilación y producción

Para generar la compilación de producción:

```bash
npx ng build
```

Angular genera los archivos de salida en el directorio configurado en `angular.json`, normalmente dentro de `dist/`.

La carpeta exacta que debe publicarse depende de la configuración actual del proyecto.

Antes de desplegar, se recomienda:

1. Ejecutar la compilación.
2. Confirmar que no existan errores.
3. Revisar las imágenes y los recursos estáticos.
4. Verificar las rutas y los enlaces.
5. Probar el formulario después del despliegue.

---

## ✉️ Formulario de contacto

El proyecto contempla la integración con Netlify Forms para recibir mensajes desde el sitio web sin desarrollar un backend propio para el procesamiento básico del formulario.

### Campos

- Nombre completo.
- Correo electrónico.
- Teléfono o WhatsApp.
- Motivo de contacto.
- Mensaje.
- Autorización para el tratamiento de datos personales.

### Identificación del formulario

El nombre configurado es:

`contacto-asoagropescam`

La plantilla estática `public/__forms.html` se utiliza para facilitar la detección del formulario durante la compilación del sitio.

### Pasos para habilitarlo

1. Mantener el mismo nombre en el formulario visible y en la plantilla estática.
2. Habilitar la detección de formularios en Netlify.
3. Ejecutar un nuevo despliegue.
4. Verificar que el formulario aparezca en el panel de Netlify.
5. Realizar un envío de prueba.
6. Configurar las notificaciones por correo electrónico.

La funcionalidad debe considerarse pendiente de validación hasta completar las pruebas en el sitio publicado.

---

## 🚀 Despliegue en Netlify

El despliegue está previsto mediante integración entre GitHub y Netlify.

### Configuración general

- **Repositorio:** repositorio de GitHub de ASOAGROPESCAM.
- **Comando de compilación:** el correspondiente al proyecto Angular, normalmente `npm run build` o `npx ng build`.
- **Directorio de publicación:** el directorio generado por la compilación y definido en `angular.json`.
- **Formulario:** Netlify Forms, una vez habilitada y verificada su detección.

### Flujo de actualización

1. Realizar los cambios localmente.
2. Probar la aplicación.
3. Preparar los cambios con Git.
4. Crear un commit descriptivo.
5. Enviar los cambios a GitHub.
6. Verificar que Netlify termine el despliegue.
7. Comprobar el sitio publicado.

La publicación automática depende de que el repositorio y la rama correspondiente estén conectados correctamente.

---

## 🌿 Control de versiones con Git

El código fuente se gestiona mediante Git y GitHub.

### Consultar los cambios

```bash
git status
```

### Preparar los archivos

```bash
git add .
```

Antes de preparar los cambios, revisa que no se incluyan credenciales, archivos temporales ni información sensible.

### Crear un commit

```bash
git commit -m "feat: actualiza el sitio institucional"
```

### Enviar cambios al repositorio remoto

```bash
git push origin main
```

Este último comando supone que el repositorio está conectado correctamente y que la rama de trabajo se llama `main`.

### Convención sugerida para commits

- `feat:` nueva funcionalidad.
- `fix:` corrección de errores.
- `style:` cambios visuales.
- `docs:` documentación.
- `refactor:` reorganización del código sin cambiar su comportamiento.

Ejemplos:

```text
feat: agrega formulario de contacto
feat: incorpora sección de proyectos
fix: corrige navegación adaptable
style: mejora la identidad visual
docs: actualiza el README
```

---

## 🔐 Seguridad y protección de datos

El desarrollo debe aplicar buenas prácticas de seguridad y mantenimiento:

- No publicar contraseñas, tokens ni claves privadas.
- Mantener fuera del repositorio los archivos que contengan secretos.
- Revisar periódicamente las dependencias y sus alertas de seguridad.
- Usar versiones compatibles de Angular, Node.js y TypeScript.
- Probar los cambios antes de publicarlos.
- Verificar los permisos y las notificaciones del formulario.
- Evitar publicar datos personales de integrantes sin autorización.
- Mantener actualizada la información institucional.

### Tratamiento de datos personales

El formulario solicita autorización para gestionar la información enviada por los visitantes. Antes de publicar el sitio, la asociación debe disponer de una política de tratamiento de datos personales apropiada, informar las finalidades y establecer mecanismos para atender las solicitudes de los titulares conforme a la normativa aplicable.

La casilla de autorización no sustituye por sí sola las demás obligaciones legales.

---

## 🛠️ Mantenimiento y mejoras

El proyecto puede ampliarse progresivamente con nuevas funcionalidades.

### Mejoras potenciales

- Incorporar fotografías reales del proyecto de piscicultura.
- Publicar información verificable sobre proyectos ejecutados.
- Ampliar la sección de actividades agropecuarias y pesqueras.
- Crear una galería de fotografías de la comunidad.
- Incorporar novedades institucionales.
- Añadir enlaces a redes sociales oficiales.
- Mejorar la accesibilidad y el rendimiento.
- Configurar un dominio personalizado.
- Evaluar herramientas de analítica respetuosas con la privacidad.

Estas mejoras son propuestas de evolución y no deben interpretarse como funcionalidades terminadas.

---

## 📍 Información de contacto

**ASOAGROPESCAM**  
Asociación Agropecuaria y Pesquera de Campesinas de La Travesía de Mompós.

- **Ubicación:** Corregimiento de La Travesía, Bolívar, Colombia.
- **Teléfono:** +57 320 449 3467.
- **Correo electrónico:** monterobastidas@gmail.com.

---

## 📋 Estado del proyecto

**Estado:** En desarrollo.

El sitio cuenta con una estructura institucional organizada en componentes, secciones de identidad, líneas de trabajo, proyectos y formulario de contacto en proceso de integración.

El despliegue definitivo, las versiones actuales de todas las dependencias y la recepción de mensajes deben verificarse antes de considerar cerrada la configuración técnica.

---

## 📄 Licencia

No se ha definido una licencia de distribución para este proyecto.

Hasta que se establezca una licencia, no debe asumirse que el código puede reutilizarse o redistribuirse libremente.

---

**ASOAGROPESCAM — Desarrollo rural, compromiso comunitario y oportunidades para el territorio.**
