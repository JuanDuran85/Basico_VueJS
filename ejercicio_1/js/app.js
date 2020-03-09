/* 
    Se crea la instancia de VueJS con la palabra reservada new Vue({}), y se pasa como parametro el elemento al cual se le creara el ambito de VueJS
*/
var vm = new Vue({
    el: '#app',
    data: {
        mensaje: "Iniciando VueJS - Grupo ",
        suma: 9-8,
        mensaje2: "segundo mensaje",
        patito: "feo"
    }
})

var app = new Vue({
    el: '#vm',
    data: {
        mensaje: "Iniciando VueJS desde app 2",
        suma: 23-46
    }
})

/* Nota: El componente data debe ser una función. Al usar la propiedad data en un componente (es decir, en cualquier lugar excepto en new Vue), el valor debe ser una función que devuelve un objeto. */