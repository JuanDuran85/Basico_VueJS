Vue.component('cuenta-regresiva',{
    template: `
        <div class="p-3 m-3">
            <p v-text="cuenta"></p>
            <button @click="tresSeg">3seg</button>
        </div>
    `,
    data() {
        return {
            cuenta: "00:00:00",
            tres: 3,
        }
    },
    methods: {
        tresSeg(){
            this.cuenta = `00:00:03seg`;
            console.log(this.cuenta);
            let cuentaTres = setInterval(function(){
                if (this.tres > 0) {
                    console.log(this.tres);
                    descontar--;
                    this.cuenta = `00:00:0${this.tres}seg`
                }else {
                    clearInterval(cuentaTres);
                }
            },1000);
        }
    },
});