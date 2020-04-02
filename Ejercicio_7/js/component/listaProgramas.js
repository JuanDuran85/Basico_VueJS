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
            <hr>
            <hr>
            <label></label>
            <div class="form-group">
              <label>Ingresa un Nombre de Ciudad o país</label>
              <input type="text"
                class="form-control" v-model="buscarNombre" aria-describedby="helpId" placeholder="Ingresa un nombre de ciudad o país">
              <small id="helpId" class="form-text text-muted">Ingresa un nombre de ciudad o país</small>
            </div>
            <div class="btn-group" data-toggle="buttons">
                <label class="btn btn-primary">Activo
                    <input type="checkbox" autocomplete="off" v-model="activo" name="op1">
                </label>
            </div>
            <div class="btn-group" data-toggle="buttons">
                <label class="btn btn-primary">Inactivo
                    <input type="checkbox" autocomplete="off" v-model="inactivo" name="op1">
                </label>
        </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Pais</td>
                        <td>Capital</td>
                        <td>Poblacion</td>
                        <td>Activo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(lugar,index) in paises2" :key="index" v-show="filtrarNombre(lugar)">
                        <th>{{index+1}}</th>
                        <td>{{lugar.pais}}</td>
                        <td>{{lugar.capital}}</td>
                        <td>{{lugar.poblacion}}</td>
                        <td>{{lugar.activo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data() {
        return {
            programas: ["C++","PHP","Java","JavaScript","C#"],
            paises: [
                {pais:"Venezuela",capital:"Caracas",poblacion:"28067000"},
                {pais:"Chile",capital:"Santiago de Chile",poblacion:"19107216"},
                {pais:"Peru",capital:"Lima",poblacion:"33105273"},
                {pais:"Argentina",capital:"Buenos Aires",poblacion:"44938712"},
                {pais:"Colombia",capital:"Bogota",poblacion:"50372424"}
            ],
            paises2: [
                {pais:"Venezuela",capital:"Caracas",poblacion:"28067000", activo: true},
                {pais:"Chile",capital:"Santiago de Chile",poblacion:"19107216", activo: true},
                {pais:"Peru",capital:"Lima",poblacion:"33105273", activo: false},
                {pais:"Argentina",capital:"Buenos Aires",poblacion:"44938712", activo: true},
                {pais:"Colombia",capital:"Bogota",poblacion:"50372424", activo: false}
            ],
            filtro_poblacion: "10000000",
            buscarNombre: '',
            CopiaPaises: [],
            inactivo: false,
            activo: false
        }
    },
    methods: {
        filtrar(){
            this.paises = this.CopiaPaises;
            this.paises = this.paises.filter(variable => {
                return variable.poblacion > this.filtro_poblacion;
            })
        },
        filtrarNombre(lugar){
            let porCiudad, porPais;
            porPais = lugar.pais.toLowerCase().indexOf(this.buscarNombre.toLowerCase()) >= 0;
            porCiudad = lugar.capital.toLowerCase().indexOf(this.buscarNombre.toLowerCase()) >= 0;
            if (this.activo && !this.inactivo) {
                return (lugar.activo && this.activo && (porCiudad || porPais));
            } else if (this.inactivo && !this.activo){
                return (!lugar.activo && this.inactivo && (porCiudad || porPais));
            } else {
                return (porCiudad || porPais);
            }
        },
    },
    created() {
        this.CopiaPaises = this.paises;
    },
}