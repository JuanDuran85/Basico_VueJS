Vue.component('cuenta-regresiva',{
    template: `
        <div class="p-3 m-3">
            <p v-text="cuenta"></p>
            <button @click="tresSeg">3seg</button>
            <button @click="cincoSeg">5seg</button>
            <button @click="unMin">1min</button>
        </div>
    `,
    data() {
        return {
            cuenta: "00:00:00 H:min:seg",
            tres: 3,
            cinco: 5,
            uno: 60
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
        },
        cincoSeg(){
            this.cuenta = `00:00:05seg`;
            let cuentaCinco = setInterval(()=>{
                if (this.cinco > 0) {
                    console.log(this.cinco);
                    this.cinco--;
                    this.cuenta = `00:00:0${this.cinco}seg`
                }else {
                    this.cinco = 5;
                    clearInterval(cuentaCinco);
                }
            },1000);
        },
        unMin(){
            this.cuenta = `00:01:00 min-seg`;
            let cuentaUno = setInterval(()=>{
                if (this.uno > 0) {
                    console.log(this.uno);
                    this.uno--;
                    this.cuenta = `00:00:${this.uno}seg`
                }else {
                    this.uno = 60;
                    clearInterval(cuentaUno);
                }
            },1000);
        }
    },
});