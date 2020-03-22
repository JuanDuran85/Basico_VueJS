let peliculaDetalle = {
    name: 'peliculaDetalle',
    template: `
        <div class="container" v-if="Object.keys(movie).length">
            <div class="card">
                <img :src="movie.poster_path| urlImg" alt="Caratula de pelicula" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">
                        {{movie.title}}
                    </h5>
                    <p class="card-text" v-text="movie.overview"></p>
                </div>
            </div>
        </div>  
    `,
    data() {
        return {
            movie: {},
        }
    },
    methods: {
        obtenerPelis(){
            fetch(`${this.apiBaseUrl}movie/${this.$route.params.id}${this.apiConfigura}`)
                .then(respuesta => respuesta.json())
                .then(data => {
                    this.movie = data;
                    console.log(this.movie);
                })
                .catch(error => console.error(error));
        }
    },
    mounted() {
        this.obtenerPelis();
    },
}