const Componente_1 = {
    name: "componente_1",
    template: `
        <div>
        <br>
            <ul>
                <li v-for="(item, index) in nombres" :key="index">{{index}}-{{item}}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            nombres: ["Juan","Pedro","Maria","Minerva","Jose"],
        }
    },
}