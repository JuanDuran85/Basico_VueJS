const Ejemplo = {
    template: "#ejemplo_template"
}

const router = new VueRouter({
    mode: 'history',
    base: "Ejercicio_6",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/listapersonas",
            component: ListaPersonas
        },
        {
            path: "/listaprogramas",
            redirect: '/listaprogramasFull'
        },
        {
            path: "/listaprogramasFull",
            component: ListaProgramas
        },
        {
            path: "/ejemplo",
            component: Ejemplo
        },
        {
            path: "*",
            component: PageNotFound
        },
    ]
})

const app = new Vue({
    el:"#vm",
    router,
    mounted() {
        console.log(this.$router); 
        console.log(this.$route); 
    },
})