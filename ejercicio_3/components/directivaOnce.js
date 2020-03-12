let directivaOnce = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo" v-once></h2>
            <p v-html="mensaje" v-once></p>
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-once",
            mensaje: "Utilizando la directiva <strong>v-once</strong> de VueJS",
        }
    },
}