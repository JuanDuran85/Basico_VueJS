Vue.component('directivas-vue', {
    template: `
        <div>
            <h2 v-text="titulo"></h2>
            <hr>
            <h2 v-text="titulo2"></h2>
            <p v-text="texto"></p>
            <p>La directiva v-text es igual a las pasadas, donde se interpolaba la varibale con las doble llaves <code>&#123;&#123;&#125;&#125; </code></p>
            <hr>
            <h2 v-text="titulo3"></h2>
            <p>Directiva v-bind o :[nombre del atributo]. Ejemplo: <a v-text="link.texto" v-bind:href="link.href" :title="link.titulo"></a></p>
            <directiva-HTML></directiva-HTML>
        </div>
    `,
    data() {
        return {
            titulo: "Directivas de VuejJS",
            titulo2: "Directiva v-text",
            titulo3: "Directiva v-bind",
            texto: "Segundo componente con Directica v-text",
            link: {
                texto: "Sitio Web VueJS",
                href: "https://es.vuejs.org/",
                titulo: "Página principal en castellano de VueJS"
            }
        }
    },
    components: {
        'directiva-HTML': directivaHTML
    }
});

/* Directivas Utilizadas:
    -> v-text: Actualiza el textContent del elemento. No renderiza las estiquetas HTML dentro de las varibales.
     
    -> v-bind: Enlaza dinámicamente uno o más atributos, o una propiedad de un componente a una expresión HTML. Cuando se utiliza para enlazar el atributo class o style, soporta atributos adicionales tales como Arreglos u Objetos. En cambio, cuando se utiliza para enlazar una propiedad, la propiedad debe ser declarada en el componente hijo de forma acorde. Pero cuando se utiliza sin argumento, puede ser utilizado para enlazar un objeto que contega pares nombre-valor de atributos. Note que en este modo los atributos class y style no soportan Arreglo u Objetos.

    -> v-html: renderiza directamente las etiquetas que se encuentren en las varibales.
*/