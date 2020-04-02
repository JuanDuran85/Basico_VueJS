# VueJS

## Ejemplo_1

* Podrán observar como se inicia un proyecto con VueJS utilizando el CDN de VueJS.
* Se utilizaran métodos y propiedades computadas.

## Ejemplo_2

* Utilizacion de directivas como: v-bind, v-for, v-if-else, v-html, v-model, v-show

## Ejemplo_3

* Utilización de eventos con la directiva v-on y el evento click.

## Ejemplo_4

* Utilización de Watch como visor de cambios

## Ejemplo_5

* Implementación de rutas con Vue Router. Las rutas, nos permiten movernos de una pagina a otra, creando aplicaciones del tipo SPA, la cual, es una aplicacion web que puede entrar en una sola página, cargando secciones indicadas solamente y no toda la página. 

## Ejemplo_6

* Implementación de rutas (Vue Router) con Componentes en VueJS.
* Utilización de Slot
* Implementación de Bootstrap

## Ejemplo_8

* Implementacion de Webpack-Bael con Vue en el proyecto.
    - Creacion de la carpeta del proyecto.
    - Creacion del package.json por la terminal con ```npm init -y```
    - Instalación de los dependencias mediante el comendo: ```npm install vue webpack webpack-cli --save-dev``` utilizando las dependencias para desarrollo.
    - Creacion de la carpeta src con el archivo index.js
    - Modificacion del package.json agregando al scripts: ```"dev": "webpack --mode=development"```. Por lo que para dar inicio a la compilacion y creacion de la carpeta dist con el archivo main.js, se utiliza el: ```npm run dev```
    - Creacion de componentes, importar y exportar archivos, instancia de Vue.
    - Instalacion de la dependencia de HTML Webpack: ```npm i --save-dev html-webpack-plugin```
    - Instalacion de la dependencia ```npm i -D vue-loader vue-template-compiler```
    - Instalacion de la dependencia para servidor: ```npm i -D webpack-dev-server```
    - Instalacion de las dependencias de babel: ```npm i -D @babel/core @babel/cli @babel/preset-env babel-loader```

* En total, las dependencias basicas a isntalar serian:
  
```bash
npm i -D vue vue-loader vue-template-compiler webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env css-loader vue-style-loader html-webpack-plugin
```