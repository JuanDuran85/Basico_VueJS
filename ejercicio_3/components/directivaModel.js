let directivaModel = {
    template: `
        <div>
            <hr>
            <h2>{{mensaje}}</h2>
            <input v-model="mensaje">
            <p>------------------------</p>
            <h4>Tipos de Checkbox</h4>
            <label>
                <input type="checkbox" v-model="checked" />
                Activado
            </label>
            <h4>Peliculas</h4>
            <label v-for="(pelis,index) in peliculas">
                <input :value="pelis" type="checkbox" v-model="favoritas"/>
                {{pelis}}
            </label>
            <section v-show="favoritas.length > 0">
                <p>PELICULAS FAVORITAS</p>
                <ul>
                    <li v-for="(peliFav,index) in favoritas" :key="index" v-text="peliFav"></li>
                </ul>
            </section>
        </div>
    `,
    data() {
        return {
            titulo2: "Directiva v-model",
            mensaje: "Usando Directiva v-model",
            checked: true,
            favoritas:[],
            peliculas: ["Mulan", "Wonder Woman II", "Black Widow", "Bond 25", "Unidos", "Top Gun 2", "El Conjuto 3"]
        }
    }
};