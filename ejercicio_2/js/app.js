/* 
    Como una convención, solemos usar la variable vm (abreviación de ViewModel) para hacer referencia a nuestra instancia de Vue.
*/
const vm = new Vue({
    el: '#vm',
    data () {
        return {
            mensaje: 'Ejemplo básico 2 VueJS'
        }
    }
});