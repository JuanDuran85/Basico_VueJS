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
        </div>
    `,
    data() {
        return {
            programas: ["C++","PHP","Java","JavaScript","C#"],
        }
    },
}