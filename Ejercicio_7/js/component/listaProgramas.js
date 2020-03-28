const ListaProgramas = {
    name: "listaProgramas",
    template: `
        <div>
            <br>
            <ul>
                <li v-for="(item, index) in programas" :key="index">
                    {{index}}-{{item}}<span v-if="index == programas.length -1"> - Último elemento del arreglo</span>
                </li>
            </ul>
            <br>
            <ul>
                <li v-for="(item, index) in paises" :key="index">
                    {{index}}-{{item.pais}}-{{item.capital}}-{{item.poblacion}}
                </li>
            </ul>
            <input type="text" v-model="filtro_poblacion" />
            <button @click="filtrar">Filtrar por Poblacion</button>
        </div>
    `,
    data() {
        return {
            programas: ["C++","PHP","Java","JavaScript","C#"],
            paises: [
                {pais:"Venezuela",capital:"Caracas",poblacion:28067000},
                {pais:"Chile",capital:"Santiago de Chile",poblacion:19107216},
                {pais:"Peru",capital:"Lima",poblacion:33105273},
                {pais:"Argentina",capital:"Buenos Aires",poblacion:44938712},
                {pais:"Colombia",capital:"Bogota",poblacion:50372424}
            ],
            filtro_poblacion: 10000000,
            CopiaPaises: []
        }
    },
    methods: {
        filtrar(){
            this.paises = this.paises.filter(variable => {
                return variable.poblacion > this.filtro_poblacion;
            })
        }
    },
}