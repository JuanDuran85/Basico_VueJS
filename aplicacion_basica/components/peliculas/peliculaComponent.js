//hijo de propComponent
let peliculaComponent = {
    template: `
        <div class="card" :class="{pelicula_gustar:gusta}" :id="id | formadId">
            <img :src="poster_path | urlImg" alt="Caratula de pelicula" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">
                    {{title | mayusTitle | centrado}}
                </h5>
                <p class="card-text">{{overview | recorte}}</p>
                <button @click="gustaPeli" class="btn" :class="cambioClases">{{gusta ? 'Favorito ':'Agregar a Favoritos '}}<i :class="corazonGusta"></i></button>
                <router-link :to="{name: 'detalles', params: {id}}" class="btn btn-primary">Detalles</router-link>
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
            required: false
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
        gustaPeli(){
            let datos = {
                id: this.id,
                gustando: !this.gusta
            }
            if (!this.gusta) {
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