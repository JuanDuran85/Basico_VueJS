//hijo de propComponent
let peliculaComponent = {
    template: `
        <div>
            <img :src="caratula" alt="Caratula de pelicula"/>
            <h2 v-text="titulo"></h2>
            <p v-html="descrip"></p>
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
        titulo: {
            type: String,
            required: true
        },
        caratula: {
            type: String,
            required: true
        },
        descrip: {
            type: String,
            default: "La pelicula no posee descripción"
        },
        gusta: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        },
        id: {
            type: Number,
            required: true
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
            console.log(datos);
            //en la data del emit solo se puede pasar un valor
            
            //trabajando con el $parent
            if (!this.gusta) {
                console.log("mostrando parent");
                console.log(this.$parent.peliculas); //$parent es el componente padre / mostrando las peliculas en la data del componente padre
                console.log(this.$parent.mostrarFavorito); //$parent es el componente padre / mostrando la variable mostrarFavorito del componente padre en la data
                this.$parent.mostrarFavorito = true;
                // ejecutando con evento el metodo en el padre
                console.log(this.$parent.mostrarFavorito);
                this.$parent.mostrandoCon();

            };
            this.$emit("gutarPeli", datos);
        },
    },
}