let directivaIf = {
    template: `
        <div>
            <hr>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <p v-if="mostrar">Mostrando y Ocultando con la directiva v-if/v-else-if/v-else</p>
            <p v-if="usuario.permiso && usuario.vip">El usuario tiene permiso para ver la información y es VIP</p>
            <p v-else-if="usuario.permiso">El usuario tiene permiso para ver la información pero no es VIP</p>
            <p v-else-if="usuario.vip">El usuario es VIP</p>
            <p v-else>El usuario no tiene permiso para ver la información ni es VIP</p>
        </div>
    `,
    data() {
        return {
            titulo: "Directiva v-if/v-else-if/v-else",
            mensaje: "Utilizando la directiva <strong>v-if</strong> de VueJS",
            mostrar: true,
            usuario: {
                permiso: false,
                vip: true
            }
        }
    },
}