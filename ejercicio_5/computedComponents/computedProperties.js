Vue.component('computed-properties', {
    template: `
        <div>
            <h1>Utilizando computed properties</h1>
            <p>{{usuario.nombre}} {{usuario.apellido}}</p>
            <p>{{nombreCompleto}}</p>
            <p>{{nombre_completo()}}</p>
            <p>{{edadUsuario}}</p>
        </div>
    `,
    data() {
        return {
            usuario: {
                nombre: "Juan",
                apellido: "Duran",
                fecha: 1970
            }
        }
    },
    //con las computed Vue guarda la informacion en cache y espera para renderizar
    computed: {
        nombreCompleto(){
            return `${this.usuario.nombre} ${this.usuario.apellido}`
        },
        edadUsuario(){
            let fechaDate = new Date();
            let fechaActual = fechaDate.getFullYear();
            return fechaActual-Number(this.usuario.fecha)
        }
    },
    //es un proceso que consume mas recurso
    methods: {
        nombre_completo(){
            return `${this.usuario.nombre} ${this.usuario.apellido}`
        }
    },
})