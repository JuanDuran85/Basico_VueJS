//hijo de propComponent
let peliculaComponent = {
    template: `
        <div class="card" :class="{pelicula_gustar:gustar}" :id="id | formadId">
            <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+poster_path" alt="Caratula de pelicula" class="card-img-top">
            <div class="card-body" :class="{clase_2:true,'clase-2':false}">
                <h5 class="card-title" :class="[nombreClase_1,nombreClase_2]">
                    {{title | mayusTitle | centrado}}
                </h5>
                <p class="card-text" :class="clases">{{overview | recorte}}</p>
                <button @click="gustaPeli" class="btn" :class="cambioClases">{{gustar ? 'Favorito ':'Agregar a Favoritos '}}<i :class="corazonGusta"></i></button>
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
                gustando: !this.gusta
            }
            if (!this.gusta) {
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