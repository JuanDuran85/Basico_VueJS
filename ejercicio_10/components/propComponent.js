// componente padre de peliculaFavorita y peliculaComponent
Vue.component('prop-component', {
    template: `
        <div>
            <h1 v-text="titulo"></h1>
            <!-- Al agregar el :key podemos eliminar la advertencia que aparece en la consola -->
            <!-- el binding se hace porque se pasa data del componente padra al hijo, distinto al pasar valores directos o textos -->
            <peliculaComponent :ref="'peli-'+peli.id" v-for="(peli,index) in peliculas"
                :key="index"
                :id="peli.id" 
                :titulo="peli.titulo" 
                :descrip="peli.descripcion" 
                :caratula="peli.caratula"
                :gusta="peli.gustar"
                @gutarPeli="leGustoPeli"
            />
            <!-- las referencias se agregan a los componentes hijos dentro del padre, las cuales, pueden ser usas como un id -->
            <peliculaFavorita ref="idPeliFav" :mostrar.sync="mostrarFavorito"/>
        </div>
    `,
    data() {
        return {
            titulo: "Utilizando Props",
            mensaje: "compartiendo datos a componentes hijos",
            peliculas: [
                {
                    id:1,
                    titulo:"Mulán",
                    descripcion: "<b>El emperador</b> chino emite un decreto que exige que cada hogar debe reclutar a un varón para luchar con el ejército imperial en la guerra contra los Hunos. Para salvar a su anciano padre de este deber, su única hija Fa Mulan se hace pasar por soldado y toma su lugar.",
                    caratula: "https://lumiere-a.akamaihd.net/v1/images/mulan_payoff_poster_las_1_2459ff1d.jpeg",
                    gustar: false
                },
                {
                    id:2,
                    titulo:"Wonder Woman 2",
                    
                    caratula: "https://www.tonica.la/__export/1559770060226/sites/debate/img/2019/06/05/d8uwzjewwaajqcm_crop1559769938875.jpg_1359985867.jpg",
                    gustar: false
                },
                {
                    id:3,
                    titulo:"Black Widow",
                    descripcion: "Al nacer, la Viuda Negra, también conocida como Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.",
                    caratula: "https://secureservercdn.net/198.71.233.195/r7q.b02.myftpupload.com/wp-content/uploads/2019/08/black-widow-d23-poster-top-1024x576.jpg",
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
            }
        },
        mostrandoCon(){
            console.log("--->Mostrando el mensaje desde el metodo del hijo por eventos")
        }
    },
    beforeCreate() {
        console.log("dentro de beforeCreate");
        //alert("creando instancia de VueJS");
    },
    created() {
        console.log("mensaje desde created");
    },
    mounted() {
        console.log("------ Mounted desde propComponent / montado -------");
        console.log(this.$refs);
        // con esto accedemos a la data del hijo
        console.log(`lamando data del hijo desde el padre --> ${this.$refs.idPeliFav.mensaje}`);
        // llamamos el mensaje en los metodos del hijo
        this.$refs.idPeliFav.mostrarMensaje();
        // modificando la data del hijo desde el padre
        this.$refs.idPeliFav.mensaje = " ----> Mensaje modificado desde el padre <---";
        // llamamos el mensaje en los metodos del hijo
        this.$refs.idPeliFav.mostrarMensaje();
    },
});