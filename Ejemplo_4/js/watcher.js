const app = new Vue({
    el:"#vm",
    data() {
        return {
            numero: 1 
        }
    },
    // los watch o observadores: se asocia a una propiedad o a un v-model y se acciona cuando estos se actualizan, por lo tanto, cada vez que exista un cambio,la función creada en el watch se ejecutará automáticamente.
    watch: {
        numero: function (valor) {
            console.log(valor);
        }
    },
    methods: {
        incrementar(){
            this.numero++;
            document.getElementById("titulo").style.fontSize = this.numero+"px";
        },
        decrementar(){
            this.numero--
            document.getElementById("titulo").style.fontSize = this.numero+"px";
        }
    },
})