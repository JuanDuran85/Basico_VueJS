/* 
    Como una convención, solemos usar la variable vm (abreviación de ViewModel) para hacer referencia a nuestra instancia de Vue. ViewModel es un componente  del  patrón  MVVM y es utilizado  por  algunos  frameworks  o  librerías  parapoder manejar estados en la parte FrontEnd de una solución de software.
*/
const vm = new Vue({
    el: '#vm',
    data () {
        return {
            mensaje: 'Ejemplo básico 2 VueJS'
        }
    }
});