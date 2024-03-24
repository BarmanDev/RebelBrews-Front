# RebelBrews

RebelBrews es una API interna diseñada para la gestión de información relacionada con cervezas y cervecerías, utilizando datos provenientes de una API externa que proporciona información sobre cervecerías de Estados Unidos. Esta API interna ofrece diversas funcionalidades, incluyendo autenticación de usuarios, registro de nuevos usuarios y operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de patrocinadores de cervecerías.

## Características principales 

- Integración con API externa: Utiliza una API externa de cervecerías de Estados Unidos para obtener información actualizada sobre cervezas y cervecerías.
- Autenticación de Usuarios: Permite a los usuarios autenticarse de manera segura mediante un sistema de inicio de sesión.
- Registro de Usuarios: Los nuevos usuarios pueden registrarse en la plataforma para acceder a funcionalidades adicionales.
- Operaciones CRUD de Patrocinadores: Ofrece funcionalidades completas de CRUD para la gestión de patrocinadores de cervecerías, incluyendo la capacidad de ver, añadir, editar, modificar y eliminar patrocinadores.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
