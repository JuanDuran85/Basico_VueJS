let peliculaComponent = {
    template: `
        <div>
            <img :src="caratula" alt="Caratula de pelicula"/>
            <h2 v-text="titulo"></h2>
            <p v-text="descrip"></p>
            <button @click="gustaPeli" v-text="gusta ? 'Favorito':'Agregar a Favoritos'"></button>
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
        gusta: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        },
    },
    methods: {
        // *Vue indica que no es recomendable modificar la data de los padres directamente desde los hijos 
        gustaPeli(){
            // *this.gusta = !this.gusta
            let datos = {
                id: this.id,
                gustando: !this.gusta
            }
            //en la data del emit solo se puede pasar un valor
            
            //trabajando con el $parent
            if (!this.gusta) {
                console.log(this.$parent.peliculas); //$parent es el componente padre / mostrando las peliculas en la data del componente padre
                console.log(this.$parent.mostrarFavorito); //$parent es el componente padre / mostrando la variable mostrarFavorito del componente padre en la data
                this.$parent.mostrarFavorito = true;

            };
            this.$emit("gutarPeli", datos);
        }
    },
}