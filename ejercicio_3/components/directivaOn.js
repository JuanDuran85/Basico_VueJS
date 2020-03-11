let directivaOn = {
    template: `
        <div>
        <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <button v-on:click.stop="mensaje_f">Clic Aquí</button>
            <p>-----Pelicula------</p>
            <p v-text="pelicula"></p>
            <button @click.stop="comprar_entrada">Comprar Pelicula</button>
            <p>Entradas Disponibles: <span v-text="entradas"></span></p>
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-on",
            mensaje: "Utilizando la directiva <strong>v-on</strong> de VueJS",
            mensaje2: "Mensaje desde la data del componenete v-on",
            pelicula: "El Señor de los Anillos",
            entradas: 5,
        }
    },
    methods: {
        mensaje_f: function () {  
            alert(this.mensaje2);
        },
        comprar_entrada(){
            if (this.entradas > 0) {
                this.entradas--;
                return alert(`Entrada para la pelicula ${this.pelicula} comprada`);
            }
            return alert("Ya no quedan entradas");
        }
    },
}