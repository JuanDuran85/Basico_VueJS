const ListaPersonas = {
    name: "listaPersonas",
    template: `
        <div>
            <br>
                <ul>
                    <li v-for="(item, index) in nombres" :key="index">{{index}}-{{item}} {{item | filtandoPersonas}}</li>

                </ul>
            <br>
            <ul>
                <li v-for="(item, index) in nombres" :key="index">{{item | filtandoPersonas2}}</li>
            </ul>
            <br>
            <button @click="filtro3">Mostrar Usuarios</button>
            <br>
            <ul v-show="validando">
                <li v-for="(item,index) in nombres2" :key="index">
                    {{index+1}} - {{item}}
                </li>
            </ul>
            <br>
            <br>
            <select>
                <option v-for="(lugar,index) in ciudades" 
                    :key="index" 
                    :value="lugar" 
                    v-if="buscando(lugar)">
                        {{lugar}}
                </option>
            </select>
            <input type="text" v-model="busqueda">
            <br>
            <br>
            <lista-alerta></lista-alerta>
        </div>
    `,
    data() {
        return {
            nombres: ["Juan","Pedro","Maria","Minerva","Jose"],
            nombres2: ["Juan","Pedro","Maria","Minerva","Jose"],
            validando: false,
            ciudades: ["Barinas", "Santiago", "Caracas", "Viña del Mar","Bogota"],
            busqueda: '',
        }
    },
    filters: {
        filtandoPersonas(variable){
            if (variable == "Maria") {
                return " - Ella es maria (utilizando Filtros)";
            }
        },
        filtandoPersonas2(variable){
            if (variable.length > 6  ) {
                return variable;
            }else{
                return `${variable} No cumple con la condicion`;
            }
        },
    },
    methods: {
        filtro3(){
            this.validando = !this.validando;
            this.nombres2 = this.nombres2.filter(variable => {
                return variable.length > 4;
            });
        },
        buscando(lugar){
            console.log("lugar: "+lugar + " busqueda: " + this.busqueda);
            return lugar.toLowerCase().indexOf(this.busqueda.toLowerCase()) >= 0
        }
    },
}