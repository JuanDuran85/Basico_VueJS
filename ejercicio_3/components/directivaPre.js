let directivaPre = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <p v-pre>{{titulo}}</p>
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-pre",
            mensaje: "Utilizando la directiva <strong>v-pre</strong> de VueJS",
        }
    },
}