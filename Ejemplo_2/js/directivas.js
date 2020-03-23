//Creando Instancia de VueJS
const app = new Vue({
    el:"#vm",
    //data empleada en la aplicación
    data() {
        return {
            mensaje: "Mensaje desde instancia de VueJS",
            valor: -5,
            mostrar: true,
            nombres: ["Juan","Manuel","Elio","Maria","Patricia","Karla"],
            conte_html: "<p>Trabajando con <stron>v-html</stron></p>",
            direccion: "https://es.vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a",
            alterna: "texto alternativo para la imagen",
            vmodel: "mensaje desde data para usar directiva vmodel",
            data_error: false
        }
    },
    //propiedades computadas (se guarda en cache, por lo que no se repite)
    computed: {
        revertirMensaje(){
            return this.mensaje.split('').reverse().join('');
        }
    },
    // los metodos realizan la operacion cada vez que se llaman.
    methods: {
        calculaSuma (valor1,valor2){
            return valor1+valor2
        }
    },
})