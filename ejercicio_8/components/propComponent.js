Vue.component('prop-component', {
    template: `
        <div>
            <h1 v-text="titulo"></h1>
            <!-- Al agregar el :key podemos eliminar la advertencia que aparece en la consola -->
            <!-- el binding se hace porque se pasa data del componente padra al hijo, distinto al pasar valores directos o textos -->
            <peliculaComponent v-for="(peli,index) in peliculas"
                :id="peli.id" 
                :titulo="peli.titulo" 
                :descrip="peli.descripcion" 
                :caratula="peli.caratula"
                :gusta="peli.gustar"
                @gutarPeli="leGustoPeli"
            />
            <peliculaFavorita v-show="mostrarFavorito" @ocultarFav="oculto"/>
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
                    descripcion: "El emperador chino emite un decreto que exige que cada hogar debe reclutar a un varón para luchar con el ejército imperial en la guerra contra los Hunos. Para salvar a su anciano padre de este deber, su única hija Fa Mulan se hace pasar por soldado y toma su lugar.",
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
            this.mostrarFavorito = datos.gustando;
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
        oculto(){
            setTimeout(()=>{
                corazon.removeAttribute("class","heart_animate");
                feed2.style.position = "relative";
            },3000);
        }
    },
    beforeCreate() {
        console.log("beforeCreate desde propComponent / antes de crear");
    },
    created() {
        console.log("Create desde propComponent / ya creado");
    },
    beforeMount() {
        console.log("beforeMount desde propComponent / antes de montarse");
    },
    mounted() {
        console.log("Mounted desde propComponent / montado");
    },
    beforeUpdate() {
        console.log("beforeUpdate desde propComponent / antes de actualizar");
    },
    updated() {
        console.log("Updated desde propComponent / actualizado");
    },
    beforeDestroy() {
        console.log("beforeDestroy desde propComponent / antes de destruir");
    },
    destroyed() {
        console.log("Destroyed desde propComponent / destruido");
    },
});