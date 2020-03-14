Vue.component('componente-app', {
    template: `
        <section>
            <h2 v-text="titulo"></h2>
            Lista<input type="text" id="entrada"/>
            <button @click="agregar">Crear</button>
                <div v-show="tareas.length > 0">
                    <h2>Lista</h2>
                    <ul>
                        <li v-for="(tarea,index) in tareas" :key="index" v-text="tarea"></li>
                    </ul>
                </div>
        </section>
    `,
    data() {
        return {
            titulo: "Crear una nueva tarea",
            tareas: []
        }
    },
    methods: {
        agregar(){
            if (document.getElementById("entrada").value.length <= 5) {
                alert("Debe agregar una actividad con mas de 5 caracteres");
            }else {
                let arregloTarea = document.getElementById("entrada").value;
                this.tareas.push(arregloTarea);
                alert("Actividad Agregada");
            }
        }
    },
})