//hijo de propComponent
let peliculaComponent = {
    template: `
        <div class="card" :class="{pelicula_gustar:gustar}" :id="id | formadId">
            <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+poster_path" alt="Caratula de pelicula" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">
                    {{title | mayusTitle | centrado}}
                </h5>
                <p class="card-text">{{overview | recorte}}</p>
                <button @click="gustaPeli" class="btn" :class="cambioClases">{{gustar ? 'Favorito ':'Agregar a Favoritos '}}<i :class="corazonGusta"></i></button>
            </div>
        </div>
    `,
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        overview: {
            type: String,
            default: "La pelicula no posee descripción"
        },
        poster_path: {
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
    },
    computed: {
        cambioClases(){
            return this.gustar ? 'btn-Fav':'btn-noFav'
        },
        corazonGusta(){
            return this.gustar ? 'fas fa-heart':'fas fa-heart-broken'
        }
    },
    methods: {
        gustaPeli(){
            let datos = {
                id: this.id,
                gustando: !this.gustar
            }
            if (!this.gustar) {
                console.log(this.$parent.peliculas);
                console.log(this.$parent.mostrarFavorito);
                this.$parent.mostrarFavorito = true;
            };
            this.$emit("gustarPeli", datos);
        },
    },
    filters: {
        formadId(id){
            return `cardPeli-${id}`;
        },
        mayusTitle(title){
            return title.toUpperCase();
        },
        centrado(title){
            let texto = "Pelicula: ";
            return texto.concat(""+title);
        },
        recorte(overview){            
            return overview.substr(0,99).concat("...");
        }
    }
}