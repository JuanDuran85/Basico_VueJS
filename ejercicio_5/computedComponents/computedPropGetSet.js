Vue.component('computed-propgetset', {
    template: `
        <div>
            <h1>Utilizando computed properties (Getter y Setter)</h1>
            <p>{{usuario.nombre}} {{usuario.apellido}}</p>
            <p>{{nombreCompleto}}</p>
            <p>{{edadUsuario}}</p>
        </div>
    `,
    data() {
        return {
            usuario: {
                nombre: "Juan",
                apellido: "Duran",
                fecha: 1985
            }
        }
    },
    //con las computed Vue guarda la informacion en cache y espera para renderizar
    computed: {
        nombreCompleto: {
            get(){
                return `${this.usuario.nombre} ${this.usuario.apellido}`
            },
            set(variable){
                console.log(variable);
                let nombre = variable.split(' ');
                this.nombreCompleto.nombre = nombre[0];
                this.nombreCompleto.apellido = nombre[1];
            }
        },
        edadUsuario(){
            let fechaDate = new Date();
            let fechaActual = fechaDate.getFullYear();
            return fechaActual-Number(this.usuario.fecha)
        }
    },
})