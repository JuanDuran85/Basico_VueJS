let directivaIf = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <p v-if="mostrar">Mostrando y Ocultando con la directiva v-show/v-if</p>
            <p v-if="usuario.permiso">El usuario tiene permiso para ver la información</p>
            <p v-else="usuario.permiso">El usuario no tiene permiso para ver la información</p>
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-if",
            mensaje: "Utilizando la directiva <strong>v-if</strong> de VueJS",
            mostrar: true,
            usuario: {
                permiso: false
            }
        }
    },
}