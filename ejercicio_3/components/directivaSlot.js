let directivaSlot = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <componenteBoton>
                <template v-slot:accciones>
                    Cerrar
                </template>
                <template #elementos>
                    Modal
                </template>
            </componenteBoton>     
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-slot",
            mensaje: "Usando Directiva v-slot",
        }
    },
    components: {
        componenteBoton
    }
};