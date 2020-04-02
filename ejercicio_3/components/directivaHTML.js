let directivaHTML = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
        </div>
    `,
    data() {
        return {
            mensaje: `Mensaje desde <strong>Componente - Directiva HTML</strong> como hijo del <em>Componente Directivas Vue</em> titulo`,     
            titulo: "Directiva v-html",
        }
    },
};