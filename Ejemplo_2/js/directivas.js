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
            conte_html: "<p>Trabajando con <stron>v-html</stron></p>"
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