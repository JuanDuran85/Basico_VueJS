const APIKEY = "fb3ca15f2fd38a0b602cd1f26c17524c";
const URL_BASICA = "https://api.themoviedb.org/3/";

Vue.component('peliculas-app', {
    template: `
        <div class="container">
            <h1 v-text="titulo"></h1>
            <h5>Bienvenido {{nombreCompleto}}</h5>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 py-3" v-for="(peli,index) in peliculas">
                    <peliculaComponent :ref="'peli-'+peli.id"
                        :id="peli.id" 
                        :title="peli.title" 
                        :overview="peli.overview" 
                        :poster_path="peli.poster_path"
                        :gustar="peli.gustar"
                        @gustarPeli="leGustoPeli"
                    />
                </div>
            </div>
            <div class="row">
                <nav aria-label="...">
                    <ul class="pagination text-center">
                        <li class="page-item">
                            <a class="page-link" href="#" tabindex="-1" v-show="page != 1" @click.prevent="previous(page)">Previous</a>
                        </li>
                        <li class="page-item" v-for="(pag,index) in total_pages" :key="index" :class="{'active': pag == page}" aria-current="page" v-show="pag*20/peliculas.length < 10">
                            <a class="page-link" :href="URL_Semi+'?page='+pag">{{pag}} <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" @click.prevent="next(page)">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <peliculaFavorita ref="idPeliFav" :mostrar.sync="mostrarFavorito"/>
        </div>
    `,
    data() {
        return {
            usuario: {
                nombre: "Juan",
                apellido: "Duran",
            },
            viejoUsuario: null,
            titulo: "Películas WebApp",
            mensaje: "compartiendo datos a componentes hijos",
            peliculas: [],
            mostrarFavorito: false,
            page: 1,
            total_pages: null,
            URL_Semi: null
        }
    },
    components: {
        peliculaComponent,
        peliculaFavorita
    },
    computed: {
        nombreCompleto(){
            return `${this.usuario.nombre} ${this.usuario.apellido}`
        }
    },
    methods: {
        leGustoPeli(datos){
            console.log(datos);
            let pelicuGusta = this.peliculas.find(pelicula => pelicula.id == datos.id);
            pelicuGusta.gustar=datos.gustando;
            if (pelicuGusta.gustar){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: `La pelicula ${pelicuGusta.title} fue agregada a favoritos`
                });
                let corazon = document.getElementById("corazon");
                let feed2 = document.getElementById("feed2");
                corazon.setAttribute("class","heart heart_animate");
                feed2.style.position = "fixed";
                setTimeout(()=>{
                    corazon.removeAttribute("class","heart_animate");
                    feed2.style.position = "relative";
                },3000);
            }else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: `La pelicula ${pelicuGusta.title} fue eliminada de los favoritos`
                });
            };
        },
        conexion(){
            const URL = `${URL_BASICA}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}`;
            fetch(URL)
                .then(respuesta => respuesta.json())
                .then(json => {
                    this.page = json.page;
                    this.total_pages = json.total_pages;
                    this.peliculas = json.results;
                    this.peliculas.gustar = false;
                    console.log(this.peliculas);
                })
                .catch(error => console.log(error));
        },
        next(page){
            console.log(page);
            this.page = page+1;
            this.conexion();
        },
        previous(page){
            console.log(page);
            this.page = page-1;
            this.conexion();
        }
    },
    mounted() {
        let URL_local = new URL(window.location.href);
        this.page = URL_local.searchParams.get('page');
        this.URL_Semi = URL_local.origin+URL_local.pathname;
        this.conexion();
    },
});