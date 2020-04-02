Vue.component('imagen-post', {
    template: `
        <div>
            <img :src="srcImg()" alt="Alternativa" width="30%">
            <img :src="url2" alt="Alternativa 2">
        </div>
    `,
    props: {
        url: {
            type: String,
            required: true
        },
        url2: {
            type: String,
            required: true,
            default: "https://placeholder.pics/svg/300",
        }
    },
    data() {
        return {
            title: "Titulo de la imagen"
        }
    },
    methods: {
        srcImg(){
            if(this.url != ""){
                return this.url
            }else{
                return "https://aetapi.org/wp-content/uploads/2020/03/corona-virus.jpg"
            }
        },
    },
})