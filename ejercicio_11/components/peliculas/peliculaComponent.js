//hijo de propComponent
let peliculaComponent = {
    template: `
        <div class="card" :class="{pelicula_gustar:gusta}" :id="id | formadId">
            <img :src="caratula" alt="Caratula de pelicula" class="card-img-top">
            <div class="card-body" :class="{clase_2:true,'clase-2':false}">
                <h5 class="card-title" :class="[nombreClase_1,nombreClase_2]">
                    {{titulo | mayusTitulo | centrado}}
                </h5>
                <p class="card-text" :class="clases">{{descrip | recorte}}</p>
                <button @click="gustaPeli" class="btn" :class="cambioClases">{{gusta ? 'Favorito ':'Agregar a Favoritos '}}<i :class="corazonGusta"></i></button>
            </div>
        </div>
    `,
    data() {
        return {
            nombreClase_1: "clase_x",
            nombreClase_2: "clase_y",
            clases: {
                'clase-z': true,
                clase_w: false,
            },
        }
    },
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
    computed: {
        cambioClases(){
            return this.gusta ? 'btn-Fav':'btn-noFav'
        },
        corazonGusta(){
            return this.gusta ? 'fas fa-heart':'fas fa-heart-broken'
        }
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
                // ejecutando con evento el metodo en el padre
                this.$parent.mostrandoCon();

            };
            this.$emit("gutarPeli", datos);
        },
    },
    filters: {
        formadId(id){
            return `cardPeli-${id}`;
        },
        mayusTitulo(titulo){
            return titulo.toUpperCase();
        },
        centrado(titulo){
            let texto = "Pelicula: ";
            return texto.concat(""+titulo);
        },
        recorte(descrip){            
            return descrip.substr(0,99).concat("...");
        }
    },
    watch: {
        //podemos ver el cambio del valor del props,pero ademas podemos comparar los valores y dependiendo de eso reccionar, o hacer llamados asincronos cuando el valor de una propiedad o data cambie
        gusta(nuevoValor, viejoValor){
            console.log(nuevoValor);
            console.log(viejoValor);
        }
    },
}