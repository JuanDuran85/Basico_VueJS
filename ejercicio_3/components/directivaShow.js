let directivaShow = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje" :title="mensaje2"></p>
            <p v-show="mostrar">Mostrando y Ocultando con la directiva v-show</p>
            <p v-show="usuario.permiso">El usuario tiene permiso para ver la información</p>
            <p v-show="!usuario.permiso">El usuario no tiene permiso para ver la información</p>
            </div>
    `,
    data() {
        return {
            titulo: "Directiva v-show",
            mensaje: "Utilizando la directiva <strong>v-show</strong> de VueJS",
            mensaje2: `Página cargada el ${new Date().toLocaleString()}`,
            mostrar: true,
            usuario: {
                permiso: false
            }
        }
    },
}