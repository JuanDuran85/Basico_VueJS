let peliculaComponent = {
    template: `
        <div>
            <img :src="caratula" alt="Caratula de pelicula"/>
            <h2 v-text="titulo"></h2>
            <p v-text="descrip"></p>
            <button @click="$emit('update:gustar',!gustar)" v-text="gustar ? 'Favorito':'Agregar a Favoritos'"></button>
            <hr>
        </div>
    `,
    /* props: [
        'id',
        'titulo',
        'descrip',
        'caratula'
    ] */
    props: {
        id: {
            type: Number,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        descrip: {
            type: String,
            default: "La pelicula no posee descripción"
        },
        caratula: {
            type: String,
            required: true
        },
        gustar: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        },
        mensaje: {
            type: String,
            required: false
        }
    },
}