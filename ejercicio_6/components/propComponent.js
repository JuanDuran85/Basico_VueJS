Vue.component('prop-component', {
    template: `
        <div>
            <h1 v-text="titulo"></h1>
            <!-- Al agregar el :key podemos eliminar la advertencia que aparece en la consola -->
            <peliculaComponent v-for="(peli,index) in peliculas" :id="peli.id" :titulo="peli.titulo" :descrip="peli.descripcion" :caratula="peli.caratula"/>
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
                    caratula: "https://lumiere-a.akamaihd.net/v1/images/mulan_payoff_poster_las_1_2459ff1d.jpeg"
                },
                {
                    id:2,
                    titulo:"Wonder Woman 2",
                    descripcion: "Diana Prince, conocida como Wonder Woman se enfrenta a Cheetah, una villana que posee fuerza y agilidad sobrehumanas.",
                    caratula: "https://www.tonica.la/__export/1559770060226/sites/debate/img/2019/06/05/d8uwzjewwaajqcm_crop1559769938875.jpg_1359985867.jpg"
                },
                {
                    id:1,
                    titulo:"Black Widow",
                    descripcion: "Al nacer, la Viuda Negra, también conocida como Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.",
                    caratula: "https://secureservercdn.net/198.71.233.195/r7q.b02.myftpupload.com/wp-content/uploads/2019/08/black-widow-d23-poster-top-1024x576.jpg"
                }
            ]
        }
    },
    components: {
        peliculaComponent
    }
});