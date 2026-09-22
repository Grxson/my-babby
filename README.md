# KIELENTINES

Experiencia web interactiva de San Valentín construida con React, TypeScript y Three.js.

## Requisitos

- Node.js 20 o superior
- pnpm 11.24.0 (se activa automáticamente mediante Corepack)

## Inicio rápido

```bash
corepack enable
pnpm install
pnpm dev
```

Abre `http://localhost:5173` en el navegador.

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera la versión de producción |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm test` | Ejecuta las pruebas |
| `pnpm preview` | Sirve la compilación de producción |

## Acceso

La pantalla inicial usa una validación local de nombre; no hay cuentas, contraseña ni servidor de autenticación. Los nombres aceptados son `kie`, `kimberlee` y `gigi`, sin importar mayúsculas o espacios al inicio/final.

> Es una validación visual, no un mecanismo de seguridad. No debe usarse para proteger información sensible.

## Privacidad

Las fotografías personales se eliminaron del proyecto. El recorrido utiliza el marcador local `public/placeholder-recuerdo.svg` para los recuerdos y la pantalla de bienvenida.

## Tecnología

React 18, TypeScript, Vite, Three.js, Framer Motion, Tailwind CSS, shadcn/ui y Web Audio API.

## Licencia

Proyecto personal de regalo.
