# VueJS

VueJS es un marco (framework) progresivo para construir interfaces de usuario. A diferencia de otros framework, VueJS está diseñado desde cero para ser gradualmente adoptable. La biblioteca principal se centra solo en la capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. Por otro lado, VueJS también es perfectamente capaz de impulsar aplicaciones sofisticadas de una sola página cuando se usa en combinación con herramientas modernas y bibliotecas de soporte.

VueJS permite crear aplicaciones de una sola página [SPA](https://desarrolloweb.com/articulos/que-es-una-spa.html), por lo que sólo se refrescan ciertas secciones de la página cuando es requerido.

## Características

* Accesible.
* Versátil: Su núcleo es bastante pequeño y se escala a través de plugins, con lo cual escucharás mucho que Vue es una librería muy parecida a React, una librería que cumple un propósito.
* Escalable por el mismo tema de la versatilidad.
* Reactivo. En esencia, la programación reactiva es una forma de desarrollar aplicaciones que se estructuran en torno a estos flujos de datos asincrónicos. Esto se hace para mejorar la experiencia del usuario.
* Optimizado: Su core ocupa 74KB, como ves es bastante liviano.
* Comunidad: Va creciendo a un ritmo importante con más 66500 estrellas en GitHub y 130 personas contribuyendo al core cada día.
* Licencia MIT: se publicó bajo el amparo de esta licencia.
* Emplea una variación del *Modelo Vista Controlador* (MVC) denominada **modelo–vista–modelo de vista** (MVVM), el cual, es un patrón de arquitectura de software y se caracteriza por tratar de desacoplar lo máximo posible la interfaz de usuario de la lógica de la aplicación. El modelo representa la data, la vista es donde esta el usuario (html), el modelo vista es la conexion entre el modelo y la vista, se encarga de procesar los datos mediante los computed values.
* VueJS trabaja con **Componentes**, los cuales, son elementos aislados que pueden o no pueden depender de otro elemento. Por lo tanto, realiza tareas especificas y puede contener componentes hijos. En otras palabras, los cpmponentes de VueJS registran u obtienen un componente global. El registro también establece automáticamente la propiedad "name" del componente igual al "id" especificado. Igualmente, se puede inidcar que el sistema de componentes es otro concepto importante en Vue, porque es una abstracción que nos permite crear aplicaciones a gran escala compuestas de componentes pequeños, independientes y, a menudo, reutilizables. En Vue, un componente es esencialmente una instancia de Vue con opciones predefinidas. Para mayor información, revisar: [Componentes API VueJS](https://es.vuejs.org/v2/guide/components.html).

```JS
Vue.component( id, [definition] )
```

Implementando un Ejemplo:

```JS
// Define un nuevo componente llamado todo-item
Vue.component('todo-item', {
  template: '<li>Esta es una tarea.</li>'
})
```

Ahora puedes incluirlo en el template de otro componente:

```HTML
<ol>
  <!-- Crea una instancia del componente todo-item -->
  <todo-item></todo-item>
</ol>
})
```

* Tambien se utiliza el termino **"Directivas"**, las cuales, son atributos especiales que inician con "v-" mas el nombre de la directiva. Sirven para que VueJS insteractue de forma eficiente con el DOM (atributos o asignando eventos). Para mayor informacion, revisar: [Directivas API VueJS](https://es.vuejs.org/v2/api/index.html#Directivas).

## Instalación

Existen diversas maneras de incluir VueJS en un proyecto. Para ello, debemos visitar la página principal del framework, disponible en [vuejs.org](https://vuejs.org/), en la seccion de Get Started.

1. Incluyendo VueJS por CDN

VueJS en su página web oficial, incluye dos CDN para poder incluir en el proyecto a realizar. Uno de ellos es el de desarrollo. Este debería ser utilizado en todo el proyecto mientras se va construyendo o realizando. Para ello, debes incluir el siguiente enlace con la versión de desarrollo, la cual, incluye advertencias de ayuda en la consola.

```JS
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

2. Instalando VueJS por la terminal.

La CLI (@ vue / cli) es un paquete npm instalado globalmente y proporciona el comando vue en su terminal. Proporciona la capacidad de desarrollar rápidamente un nuevo proyecto a través de vue create, o crear prototipos de nuevas ideas instantáneamente a través de vue serve. También puede administrar sus proyectos utilizando una interfaz gráfica de usuario a través de vue ui. Analizaremos lo que puede hacer en las siguientes secciones de la guía.

Para instalar el nuevo paquete, use uno de los siguientes comandos. Necesita privilegios de administrador para ejecutarlos a menos que se haya instalado npm en su sistema a través de un administrador de versiones de Node.js (por ejemplo, n o nvm).

```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## Iniciando un Proyecto con VueJS desde el CDN

1. Primero se debe identificar la forma de incluir VueJS en nuestro proyecto, ya sea por CDN, descargando el paquete, o instalando Vue-Cli. En este caso, incluiremos el paquete por CDN.
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

## Iniciando un Proyecto con VueJS desde el terminal

1. Una vez instalado Vue/Cli, se debe crear el proyecto mediante el uso de la terminal, utilizando el comando:

```sh
vue create nombre_proyecto
```

2. Aqui se debe seleccionar la instalación por defecto para iniciar el proyecto incluyendo el paquete de babel.

3. Otra forma de iniciar un proyecto con VueJS mediante el terminal, es la utilizacion de ```vue ui```, lo cual, genera una instarfaz amigable para la creacion de proyectos desde el navegador web.

## Directivas en VueJS

1. **v-text:** Actualiza el textContent del elemento. No renderiza las estiquetas HTML dentro de las varibales.
2. **v-bind:** Enlaza dinámicamente uno o más atributos, o una propiedad de un componente a una expresión HTML. Cuando se utiliza para enlazar el atributo class o style, soporta atributos adicionales tales como Arreglos u Objetos. En cambio, cuando se utiliza para enlazar una propiedad, la propiedad debe ser declarada en el componente hijo de forma acorde. Pero cuando se utiliza sin argumento, puede ser utilizado para enlazar un objeto que contega pares nombre-valor de atributos. Note que en este modo los atributos class y style no soportan Arreglo u Objetos.
3. **v-html:** renderiza directamente las etiquetas que se encuentren en las varibales. En otras palabras, actualiza el innerHTML del elemento. donde los contenidos son insertados como HTML puro y no serán compilados como pantillas (templates) de Vue.
4. **v-show:** Cambia la propiedad CSS display del elemento basado en la veracidad del valor de la expresión. Por lo tanto, esta directiva dispara transiciones cuando su condición cambia. *Importante*: un elemento con v-show siempre se renderizará y permanecerá en el DOM, es decir, v-show simplemente alterna la propiedad CSS display del elemento. No se debe utilizar cuando se quiere ocultar informacion que pueda comprometer el sistema o la información sea sensible.
5. **v-if:** Renderiza condicionalmente el elemento basado en la veracidad del valor de la expresión. El elemento y sus directivas o componentes son destruidas y re-construidas al cambiar el valor de la expresión. Si el elemento es un ```<template>```, su contenido será extraído como un bloque condicional. Debido a que v-if es una directiva, debe adjuntarse a un solo elemento. Pero, ¿y si queremos cambiar más de un elemento? En este caso, podemos usar v-if en un elemento ```<template>```, que sirve como un envoltorio invisible. El resultado final procesado no incluirá el elemento ```<template>```.
6. **v-else:** Se puede usar la directiva v-else para indicar un “bloque else“ para v-if. Es importante destacar que un elemento v-else debe seguir inmediatamente a un elemento v-if o v-else-if, de lo contrario, no será reconocido.
7. **v-model:** varía basado en el valor del input del formulario o salida de componentes. En otras palabras, crea un enlace bidireccional (two way binding) en un elemento de formulario o componente.
8. **v-on:** Agrega una escucha de evento (event listener) al elemento. El tipo del evento es denotado por el argumento. La expresión puede ser el nombre de un método, una declaración inline u omitida cuando hay modificadores. Cuando es utilizada en un elemento normal, escucha solo por evento nativos del DOM. Cuando es utilizada en un componente, escucha por evento personalizados emitidos por ese componente hijo. Esta directiva se puede abreviar utilizando "*@click*". La directiva v-on posee modificadores, los cuales, permitiran realiazar ajustes a los eventos, como son la propagación o el comportamiento por defecto. Estos modificadores pueden ser: stop, prevent, capture, entre otros. Para mayor informacion, visita: [Eventos en VueJS](https://es.vuejs.org/v2/guide/events.html)
9. **v-for:** permite recorrer listas de arreglos y objetos de una manera rápida y con pocas lineas de programación directamente desde el template del html. En otras palabras, renderiza el elemento o plantilla mutiples veces basado en la fuente de información. El valor de la directiva debe utilizar la sintaxis especial alias in expresion para proveer un alias para el elemento actual en el cual se está iterando. Alternativamente, también se puede especificar un alias para índice (o la clave si es utilizado con un Objeto). Otra propiedad importante que posee el v-for, es el key, el cual, proporciona a Vue una sugerencia para que pueda rastrear la identidad de cada nodo y, por lo tanto, reutilizar y reordenar los elementos existentes, por lo que se debe proporcionar un atributo key único para cada elemento.
10. **v-pre:** Saltea la compilación para este elemento y todos sus hijos. Usted puede utilizar esto para mostrar mustache tags sin conversión (raw). Saltear una gran cantidad de nodos sin directivas en ellos también puede acelerar el tiempo de compilación.
11. **v-slot:** Utilizado en el contenido insertado dentro de componentes hijo para indicar a que slot con nombre pertenece el contenido.
12. **v-cloak:** Esta directiva permanecerá en el elemento hasta que la instancia Vue asociada termine su compilación. Combinada con reglas de CSS tal como [v-cloak] { display: none }, esta directiva puede ser utilizada para esconder mustache bindings no compilados hasta que la instancia de Vue este lista.
13. **v-once:** Renderizará el elemento/componente solo una vez. En renderizaciones posteriores, el elemento/componente y todos sus hijos serán tratados como contenido estático, y por lo tanto, salteados. Esto puede ser utilizado para optimizar la performance de actualización.

## Métodos en VueJS

Se utilizan los métodos para ser mezclados dentro de una instancia de Vue. A los métodos, se puede acceder directamente en la instancia VM o usarlos en expresiones directivas. Todos los métodos tendrán su contexto this vinculado automáticamente a la instancia de Vue. *Importante:* no se debe usar una arrow function para definir un método (por ejemplo, ```funcion: () => this.a ++)```. La razón es que las arrow function vinculan el contexto principal, por lo que *"this"* no será la instancia de Vue como espera y *"this.a"* será undefined.

## Propiedades Computadas

Propiedades computadas a ser mezcladas dentro de la instancia de Vue. Todos los getters y setters tienen su contexto this vinculado automáticamente a la instancia de Vue. Tenga en cuenta que si usa una arrow function con una propiedad computada, this no será la instancia del componente, pero aún puede acceder a la instancia como primer argumento de la función:

```JS
computed: {
  aDouble: vm => vm.a * 2
}
```

Las propiedades computadas se almacenan en caché y solo se vuelven a calcular en los cambios de dependencia reactivos. Tenga en cuenta que si cierta dependencia está fuera del alcance de la instancia (es decir, no es reactiva), la propiedad computada no se actualizará.

## Props

Las props son atributos personalizados que usted puede registrar en un componente. Cuando se pasa un valor a un atributo prop, se convierte en una propiedad en esa instancia de componente. En otras palabras, los props sirven para pasar parámetros o información al propio web component para poder personalizarlo y ajustarlo dependiendo de las necesidades. Para pasar un título a nuestro componente de publicación, podemos incluirlo en la lista de props que este componente acepta, usando la opción props, ejemplo:

```JS
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

Un componente puede tener tantas props como se desee, y se puede pasar cualquier valor a cualquier prop de forma predeterminada. En el template anterior, verá que podemos acceder a este valor en la instancia del componente, al igual que con data. Los props dentro del componente en el que se declaran no son más que variables. Como pasa con las variables, los props también son reactivos, es decir, cuando desde fuera el valor del prop cambie, automáticamente se actualizará la vista y las propiedades computadas asociadas a ese prop. Para mayor información, visita: [Vue props](https://codingpotions.com/vue-props).

## Ciclo de Vida de una instancia en VueJS

Los componentes que definimos en Vue.js tienen un ciclo de vida, durante éste, podemos acceder a varias funciones (hooks) y, con ellos, ejecutar el código que queremos en ciertos puntos del ciclo de vida del componente. Por ejemplo, podremos ejecutar código antes de que el componente se añada al DOM y/o cuando ya esté añadido, también antes de que se elimine, entre otras opciones más.

Todos los hooks de ciclo de vida tienen automáticamente su contexto this vinculado a la instancia, de modo que usted puede acceder a datos, propiedades computadas y métodos. Esto significa que no debe usar una arrow function para definir un método de ciclo de vida (por ejemplo, ```created: () => this.fetchTodos ())```. La razón es que las arrow functions vinculan el contexto principal, por lo que this no será la instancia de Vue como espera y this.fetchTodos no estará definido.

Los hooks por los que puede pasar la instancia de Vue.js o un componente de Vue.js son (sacado de la documentación):

* beforeCreate: se ejecuta justo después de la inicialización de la instancia.
* created:  se ejecuta cuando la instancia y los eventos, las computed properties, el data y los métodos están creados. Normalmente se utiliza para inicializar propiedades del objeto data con consultas HTTP Get.
* beforeMount: se ejecuta justo antes de que se añada al DOM.
* mounted: se ejecuta después de añadirlo al DOM. Se puede utilizar para inicializar librerías que dependan del DOM.
* beforeUpdate: se ejecuta cuando el data cambia, pero el DOM aun no ha plasmado los cambios.
* updated: se ejecuta después de que el data cambie y el DOM muestre estos cambios.
* beforeDestroy: se ejecuta justo antes de eliminar la instancia.
* destroyed: se ejecuta cuando la instancia, los eventos, directivas e hijos del componente se han eliminado.

![Ciclo de Vida](https://es.vuejs.org/images/lifecycle.png?_sw-precache=6f2c97f045ba988851b02056c01c8d62).

## Filtros en VueJS

Vue.js permite definir filtros que pueden usarse para aplicar formato de texto común. Se pueden utilizar filtros en dos lugares: interpolaciones mustache y expresiones v-bind (siendo esta última, soportada en 2.1.0+). Los filtros se deben agregar al final de la expresión de JavaScript, denotados por símbolo “pipe” --> "|". La función del filtro siempre recibe el valor de la expresión como su primer argumento.

```HTML
<!-- en mustaches -->
{{ message | capitalize }}

<!-- en v-bind -->
<div v-bind:id="rawId | formatId"></div>
```

## Watchers

Si bien las propiedades computadas son más apropiadas en la mayoría de los casos, hay ocasiones en que es necesario un observador personalizado. Es por ello que Vue proporciona una forma más genérica de reaccionar a los cambios de datos a través de la opción "watch". Esto es más útil cuando desea realizar operaciones asíncronas o costosas en respuesta al cambio de datos. Por lo tanto, son metodos que nos permite estar pendiente de los cambios de la data de nuestros componentes, ya sean los props o la data directamente.

Ahora bien, cuando la data corresponde a un objeto donde las claves son expresiones para observar y los valores son los callbacks correspondientes... el valor también puede ser una cadena de texto con el nombre de un método o un Objeto que contenga opciones adicionales. En este caso, la instancia de Vue llamará al watch para cada entrada en el objeto en la instanciación.

Importante: Cuando se trabaja con el Watch en objetos, al realizar cambios a los valores de las llaves los watchers no se activan directamente, por lo tanto, se deben utilizar manipuladores (handler) y opciones especificas (deep, immediate).

## Referencias (ref)

En VueJS, ref es utilizado para registrar una referencia a un elemento o a un componente hijo desde el padre. La referencia será registrada bajo el objeto ```$refs``` del componente padre. Si se utiliza en un elemento “plano” del DOM, la referncia será a dicho elemento; si se utiliza en un componente hijo, la referencia será a la instancia de dicho componente. En otras palabras, las referencias nos sirven para asignar un marcador unico o "ID" para poder ver la data en los componentes hijos.  

Una nota importante sobre el tiempo de registro de referencias: dado que las mismas son creadas como resultado de la función de renderizado, no se puede acceder a las mismas en la renderización inicial - estas no existen todavía! También, es importante destacar que las "refs" no son reactivas, por lo tanto, no se deben utilizar en plantillas para enlace de datos (data-binding).

## Mixin

Los mixins son una forma flexible de distribuir funcionalidades reutilizables para componentes de Vue. Un o




bjeto mixin puede contener cualquier opción de componente. Cuando un componente usa un mixin, todas las opciones en el mixins se “mezclan” en las propias opciones del componente.

También se puede aplicar un mixin globalmente. Estos consisten en aplicar funcionalidades globales a todos los componentes, por lo tanto, una vez que aplique un mixin globalmente, afectará a cada instancia de Vue creada posteriormente. Pero, cuando se usa correctamente, se puede usar para inyectar lógica de procesamiento para opciones personalizadas. Los mixin globales se deben utilizar lo menos posible y con cuidado, ya que afecta a cada instancia creada de Vue, incluidos los componentes de terceros. En la mayoría de los casos, solo se deben utilizar para el manejo de opciones personalizadas.

## [Vue Router](https://router.vuejs.org/)
Permite recordar y mantener las instancias de las rutas de nuestro navegador, y que solamente se actualice el componente que compone esa ruta. Por lo tanto, se podrá cambiar el URL sin perder el estado de nuestra aplicacion mediante una SPA.

Vue Router es el enrutador oficial de VueJS, el cual, se integra profundamente con el núcleo de VueJS para facilitar la creación de aplicaciones de una sola página (SPA). Las características incluyen:

* Ruta anidada / mapeo de vista
* Configuración de enrutador modular basada en componentes
* Parámetros de ruta, consulta, comodines
* Ver los efectos de transición impulsados ​​por el sistema de transición de Vue.js
* Control de navegación de grano fino
* Enlaces con clases de CSS activas automáticas
* Modo de historial HTML5 o modo hash, con recuperación automática en IE9
* Comportamiento de desplazamiento personalizable