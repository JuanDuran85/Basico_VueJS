let directivaSlot = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <componenteBoton>
                <template v-slot:accciones>
                </template>
                <template #elementos>
                </template>
            </componenteBoton>
            <componenteContainer>
                <template #header></template>
                <template #main></template>
                <template #footer></template>
            </componenteContainer>  
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-slot",
            mensaje: "Usando Directiva v-slot",
        }
    },
    components: {
        componenteBoton,
        componenteContainer
    }
};