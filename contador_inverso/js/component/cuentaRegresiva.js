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
            let cuentaTres = setInterval(()=>{
                if (this.tres > 0) {
                    console.log(this.tres);
                    this.tres--;
                    this.cuenta = `00:00:0${this.tres}seg`
                }else {
                    this.tres = 3;
                    clearInterval(cuentaTres);
                }
            },1000);
        }
    },
});