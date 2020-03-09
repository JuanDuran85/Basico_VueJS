# VueJS

VueJS es un marco (framework) progresivo para construir interfaces de usuario. A diferencia de otros framework, VueJS está diseñado desde cero para ser gradualmente adoptable. La biblioteca principal se centra solo en la capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. Por otro lado, VueJS también es perfectamente capaz de impulsar aplicaciones sofisticadas de una sola página cuando se usa en combinación con herramientas modernas y bibliotecas de soporte.

VueJS permite crear aplicaciones de una sola página [SPA](https://desarrolloweb.com/articulos/que-es-una-spa.html), por lo que sólo se refrescan ciertas secciones de la página cuando es requerido.

##  Características

* Accesible.
* Versátil: Su núcleo es bastante pequeño y se escala a través de plugins, con lo cual escucharás mucho que Vue es una librería muy parecida a React, una librería que cumple un propósito.
* Escalable por el mismo tema de la versatilidad.
* Reactivo. En esencia, la programación reactiva es una forma de desarrollar aplicaciones que se estructuran en torno a estos flujos de datos asincrónicos. Esto se hace para mejorar la experiencia del usuario.
* Optimizado: Su core ocupa 74KB, como ves es bastante liviano.
* Comunidad: Va creciendo a un ritmo importante con más 66500 estrellas en GitHub y 130 personas contribuyendo al core cada día.
* Licencia MIT: se publicó bajo el amparo de esta licencia.
* Emplea una variación del *Modelo Vista Controlador* (MVC) denominada **modelo–vista–modelo de vista** (MVVM), el cual, es un patrón de arquitectura de software y se caracteriza por tratar de desacoplar lo máximo posible la interfaz de usuario de la lógica de la aplicación. El modelo representa la data, la vista es donde esta el usuario (html), el modelo vista es la conexion entre el modelo y la vista, se encarga de procesar los datos mediante los computed values.
* VueJS trabaja con **Componentes**, los cuales, son elementos aislados que pueden o no pueden depender de otro elemento. por lo tanto, realiza tareas especificas y puede contener componentes hijos. En otras palabras, los cpmponentes de VueJS registran u obtienen un componente global. El registro también establece automáticamente la propiedad "name" del componente igual al "id" especificado. Para mayor información, revisar: [Componentes API VueJS](https://es.vuejs.org/v2/guide/components.html).

```JS 
Vue.component( id, [definition] )
```

* Tambien se utiliza el termino **"Directivas"**, las cuales, son atributos especiales que inician con "v-" mas el nombre de la directiva. Sirven para que VueJS insteractue de forma eficiente con el DOM (atributos o asignando eventos). Para mayor informacion, revisar: [Directivas API VueJS](https://es.vuejs.org/v2/api/index.html#Directivas).

## Instalación.

Existen diversas maneras de incluir VueJS en un proyecto. Para ello, debemos visitar la página principal del framework, disponible en [vuejs.org](https://vuejs.org/), en la seccion de Get Started.

1. Incluyendo VueJS por CDN

VueJS en su página web oficial, incluye dos CDN para poder incluir en el proyecto a realizar. Uno de ellos es el de desarrollo. Este debería ser utilizado en todo el proyecto mientras se va construyendo o realizando. Para ello, debes incluir el siguiente enlace con la versión de desarrollo, la cual, incluye advertencias de ayuda en la consola.

```JS
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## Iniciando un Proyecto con VueJS

1. Primero se debe identificar la forma de incluir VueJS en nuestro proyecto, ya sea por CDN, descargando el paquete, o instalando Vue-Cli.
2. Crear un archivo HTML donde irá la vista de nuestro modelo... En este archivo se debe agregar el CDN o direccion al paquete de desarrollo de Vue y enlazar el archivo externo. Dentro del `<body>` se debe crear una estructura con el id que sera el elemento principal de VueJS.

```HTML
<body>
    <div id="vm">{{nombre de variable}}</div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/app.js"></script>
</body>
```

3. Ahora dentro de una etiqueta `<script>` de html, o en un archivo externo de JavaScript, se debe inicializar una instanacia para Vue, debido a que cada aplicación de Vue se comienza creando una nueva Instancia de Vue con la función Vue, en otras palabras, una aplicación Vue está conformada por una instancia Vue raíz creada con `new Vue`, utilizando la estructura:

```JS
const vm = new Vue({
    el: '#vm',
    data: {
        nombre de variable : 'valor de la varibale'
    }
});
```

*Nota:* Como una convención, se suele usar la variable vm (abreviación de ViewModel) para hacer referencia a la instancia de Vue. Cuando se crea una instancia de Vue, se pasan opciones al objeto, es decir, cuando una instancia Vue es creada, agrega todas las propiedades encontradas en su objeto "data" al sistema de reactividad de Vue. Cuando los valores de estas propiedades cambian, la vista “reaccionará”, actualizándose para coincidir con los nuevos valores. Cuando estos datos cambian, la vista volverá a renderizarse. Es preciso señalar que las propiedades en data solo son reactivas si ya existían cuando se creó la instancia.

## Directivas en VueJS

1. v-text: Actualiza el textContent del elemento. No renderiza las estiquetas HTML dentro de las varibales.
2. v-bind: Enlaza dinámicamente uno o más atributos, o una propiedad de un componente a una expresión HTML. Cuando se utiliza para enlazar el atributo class o style, soporta atributos adicionales tales como Arreglos u Objetos. En cambio, cuando se utiliza para enlazar una propiedad, la propiedad debe ser declarada en el componente hijo de forma acorde. Pero cuando se utiliza sin argumento, puede ser utilizado para enlazar un objeto que contega pares nombre-valor de atributos. Note que en este modo los atributos class y style no soportan Arreglo u Objetos.
3. v-html: renderiza directamente las etiquetas que se encuentren en las varibales. En otras palabras, actualiza el innerHTML del elemento. donde los contenidos son insertados como HTML puro y no serán compilados como pantillas (templates) de Vue.
4. v-show: Cambia la propiedad CSS display del elemento basado en la veracidad del valor de la expresión. Por lo tanto, esta directiva dispara transiciones cuando su condición cambia. *Importante*: un elemento con v-show siempre se renderizará y permanecerá en el DOM, es decir, v-show simplemente alterna la propiedad CSS display del elemento. No se debe utilizar cuando se quiere ocultar informacion que pueda comprometer el sistema o la información sea sensible.
5. v-if: Renderiza condicionalmente el elemento basado en la veracidad del valor de la expresión. El elemento y sus directivas o componentes son destruidas y re-construidas al cambiar el valor de la expresión. Si el elemento es un ```<template>```, su contenido será extraído como un bloque condicional. Debido a que v-if es una directiva, debe adjuntarse a un solo elemento. Pero, ¿y si queremos cambiar más de un elemento? En este caso, podemos usar v-if en un elemento ```<template>```, que sirve como un envoltorio invisible. El resultado final procesado no incluirá el elemento ```<template>```.
6. v-else: Se puede usar la directiva v-else para indicar un “bloque else“ para v-if. Es importante destacar que un elemento v-else debe seguir inmediatamente a un elemento v-if o v-else-if, de lo contrario, no será reconocido.