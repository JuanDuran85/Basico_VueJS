const app = new Vue({
    el:"#vm",
    data() {
        return {
           numero: 1 
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