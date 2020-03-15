const APIKEY = "fb3ca15f2fd38a0b602cd1f26c17524c";
const URL_BASICA = "https://api.themoviedb.org/3/";

Vue.component('peliculas-app', {
    template: `
        <div class="container">
            <h1 v-text="titulo"></h1>
            <h5>Bienvenido {{nombreCompleto}}</h5>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" v-for="(peli,index) in peliculas">
                    <peliculaComponent :ref="'peli-'+peli.id"
                        :id="peli.id" 
                        :title="peli.title" 
                        :overview="peli.overview" 
                        :poster_path="peli.poster_path"
                        :gusta="peli.gustar"
                        @gutarPeli="leGustoPeli"
                    />
                </div>
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
            peliculas: [
                {
                    id:1,
                    title:"Mulán",
                    overview: "El emperador chino emite un decreto que exige que cada hogar debe reclutar a un varón para luchar con el ejército imperial en la guerra contra los Hunos. Para salvar a su anciano padre de este deber, su única hija Fa Mulan se hace pasar por soldado y toma su lugar.",
                    poster_path: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                    gustar: false
                },
                {
                    id:2,
                    title:"Wonder Woman 2",
                    poster_path: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
                    gustar: false
                },
                {
                    id:3,
                    title:"Black Widow",
                    overview: "Al nacer, la Viuda Negra, también conocida como Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.",
                    poster_path: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uAUCHOYwFKQvSRZByP8rCgWKwT.jpg",
                    gustar: false
                }
            ],
            mostrarFavorito: false
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
            //aqui buscará en la lista de peliculas y retorne directamente la pelicula que tenga el id igual al de la data
            let pelicuGusta = this.peliculas.find(pelicula => pelicula.id == datos.id);
            pelicuGusta.gustar=datos.gustando;
            //this.mostrarFavorito = datos.gustando;
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
                    title: `La pelicula ${pelicuGusta.titulo} fue agregada a favoritos`
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
                    title: `La pelicula ${pelicuGusta.titulo} fue eliminada de los favoritos`
                });
            };
        },
        conexion(){
            const URL = `${URL_BASICA}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
            fetch(URL)
                .then(respuesta => respuesta.json())
                .then(json => {
                    console.log(json.results);
                    this.peliculas = json.results;
                })
                .catch(error => console.log(error));
        }
    },
    mounted() {
        console.log("------ Mounted desde propComponent / montado -------");
        // con esto accedemos a la data del hijo
        console.log(`lamando data del hijo desde el padre --> ${this.$refs.idPeliFav.mensaje}`);
        // llamamos el mensaje en los metodos del hijo
        this.$refs.idPeliFav.mostrarMensaje();
        // modificando la data del hijo desde el padre
        this.$refs.idPeliFav.mensaje = " ----> Mensaje modificado desde el padre <---";
        // llamamos el mensaje en los metodos del hijo
        this.$refs.idPeliFav.mostrarMensaje();
        this.conexion();
    },
});