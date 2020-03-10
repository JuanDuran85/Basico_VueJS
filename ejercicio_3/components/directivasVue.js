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
            <hr>
            <h2>{{mensaje}}</h2>
            <input v-model="mensaje">
            <directiva-HTML></directiva-HTML>
            <directivaShow/>
            <directivaIf/>
            <directivaClick/>
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
            },
            mensaje: "Usando Directiva v-model"
        }
    },
    components: {
        'directiva-HTML': directivaHTML,
        directivaShow,
        directivaIf,
        directivaClick
    }
});