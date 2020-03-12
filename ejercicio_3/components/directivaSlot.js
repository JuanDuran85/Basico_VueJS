let directivaSlot = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-slot",
            mensaje: "Usando Directiva v-slot",
        }
    }
};