const ListaProgramas = {
    name: "listaProgramas",
    template: `
        <div>
        <br>
            <ul>
                <li v-for="(item, index) in programas" :key="index">{{index}}-{{item}}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            programas: ["C++","PHP","Java","JavaScript","C#"],
        }
    },
}