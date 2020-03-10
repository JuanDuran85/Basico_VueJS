let directivaClick = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <div v-if="ver">
                <img alt="logo" :src="srcImg">
                <p>Se ve y se oculta con el boton usando directivas @click y v-if</p>
            </div>
            <button @click="ver_ocultar">Mostrar/Ocultar</button>
        </div>
    
    `,
    data() {
        return {
            titulo: "Directiva Click",
            mensaje: "Usando la Directiva <strong>@click</strong>",
            srcImg: "https://desafiolatam.com/assets/seo/desafiolatam_principal-031aadc574e79866fac011f0e4dae20b0d891d220e593b203b39568a495b894c.jpg",
            ver: false,
        }
    },
    methods: {
        ver_ocultar: function() {
            this.ver = !this.ver
        }
    },
}