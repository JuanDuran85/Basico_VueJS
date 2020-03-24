const ListaPersonas = {
    name: "listaPersonas",
    template: `
        <div>
            <br>
                <ul>
                    <li v-for="(item, index) in nombres" :key="index">{{index}}-{{item}}</li>
                </ul>
            <br>
            <lista-alerta></lista-alerta>
        </div>
    `,
    data() {
        return {
            nombres: ["Juan","Pedro","Maria","Minerva","Jose"],
        }
    },
}