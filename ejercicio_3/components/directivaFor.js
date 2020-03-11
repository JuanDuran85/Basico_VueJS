let directivaFor = {
    template: `
        <div>
        <hr>
            <h2 v-text="titutlo"></h2>
            <p v-html="mensaje"></p>
            <p>Mostrando valores para un arreglo con v-for</p>
            <ul>
                <li v-for="colores in lista_color" v-text="colores"></li>
            </ul>
            <p>Mostrando valores para un arreglo con v-for y :key</p>
            <ul>
                <li v-for="(ciudades, index) in lista_ciudades" :key="index">
                    {{index+1}}-{{ciudades}}
                </li>
            </ul>
            <p>Mostrando valores para un objeto con v-for</p>
            <ul>
                <li v-for="(val, key, index) in objeto_nombres">{{index}} --> {{key}}: {{val}}</li>
            </ul>
            <p>Mostrando valores para un objeto con v-for y :key en una tabla</p>
            <table style="border: 1px solid black">
                <tbody>
                    <tr>
                        <td style="border: 1px solid black">Numero</td>
                        <td style="border: 1px solid black">Ciudad</td>
                        <td style="border: 1px solid black">Moneda</td>
                    </tr>
                    <tr v-for="(moneda, llave, index) in objeto_moneda" :key="index">
                        <td style="border: 1px solid black">{{index}}</td>
                        <td style="border: 1px solid black">{{llave}}</td>
                        <td style="border: 1px solid black">{{moneda}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Mostrando valores para un objeto y array con v-for y :key</p>
            <table style="border: 1px solid black">
                <tbody>
                    <tr>
                        <td style="border: 1px solid black">#</td>
                        <td style="border: 1px solid black">Nombre</td>
                        <td style="border: 1px solid black">Apellido</td>
                        <td style="border: 1px solid black">Usuario</td>
                    </tr>
                    <tr v-for="(valor, index) in lista_objeto" :key="index">
                        <td style="border: 1px solid black">{{index+1}}</td>
                        <td style="border: 1px solid black">{{valor.nombre}}</td>
                        <td style="border: 1px solid black">{{valor.apellido}}</td>
                        <td style="border: 1px solid black">{{valor.usuario}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data() {
        return {
            titutlo: "Directiva v-for",
            mensaje: "<em>Utilizando la directiva v-for</em>",
            lista_color: ["rojo", "verde", "azul", "amarillo", "negro", "blanco"],
            objeto_nombres: {
                nombre1: "Juan",
                nombre2: "Simon",
                nombre3: "Elizabeth"
            },
            lista_ciudades: ["Santiago de Chile", "Caracas", "Bogota", "Buenos Aires", "Lima", "La Paz"],
            objeto_moneda: {
                Chile: "Peso",
                Venezuela: "Bolivar",
                Argentina: "Peso",
                Alemania: "Euro"
            },
            lista_objeto: [
                {
                    nombre: "Juan",
                    apellido: "Duran",
                    usuario: "JuanDuran85"
                },
                {
                    nombre: "Maria",
                    apellido: "Saavedra",
                    usuario: "MSaavedra"
                },
                {
                    nombre: "Miguel",
                    apellido: "Oyarzo",
                    usuario: "TranceCode"
                }
            ]
        }
    },
}