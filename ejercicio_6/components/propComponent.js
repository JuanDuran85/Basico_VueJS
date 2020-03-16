Vue.component('prop-component', {
    template: `
        <div>
            <h1 v-text="titulo"></h1>
            <!-- Al agregar el :key podemos eliminar la advertencia que aparece en la consola -->
            <!-- el binding se hace porque se pasa data del componente padra al hijo, distinto al pasar valores directos o textos -->
            <peliculaComponent v-for="(peli,index) in peliculas" 
                :key="index"
                :id="peli.id" 
                :titulo="peli.titulo" 
                :descrip="peli.descripcion" 
                :caratula="peli.caratula"
                :gustar.sync="peli.gustar"
                mensaje="peliculas del 2020"
                />
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
            ]
        }
    },
    components: {
        peliculaComponent
    },
});