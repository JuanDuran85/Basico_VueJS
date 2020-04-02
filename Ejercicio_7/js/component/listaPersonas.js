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
<<<<<<< HEAD
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
=======
            <imagen-post :url="urlIMG" :url2="url2"></imagen-post>
            <br><br>
>>>>>>> props
            <lista-alerta></lista-alerta>
        </div>
    `,
    data() {
        return {
            nombres: ["Juan","Pedro","Maria","Minerva","Jose"],
            nombres2: ["Juan","Pedro","Maria","Minerva","Jose"],
            validando: false,
<<<<<<< HEAD
            ciudades: ["Barinas", "Santiago", "Caracas", "Viña del Mar","Bogota"],
            busqueda: '',
=======
            urlIMG: "https://cdn.pixabay.com/photo/2020/02/07/14/49/glacier-4827387_960_720.jpg",
            url2: "https://placeholder.pics/svg/150"
>>>>>>> props
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