Vue.component('imagen-post', {
    template: `
        <img :src="srcImg()" alt="Alternativa">
    `,
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            title: "Titulo de la imagen"
        }
    },
    methods: {
        srcImg(){
            console.log("mostrar");
            if(this.url != ""){
                console.log(this.url);
                return this.url
            }else{
                return "https://aetapi.org/wp-content/uploads/2020/03/corona-virus.jpg"
            }
        }
    },
})