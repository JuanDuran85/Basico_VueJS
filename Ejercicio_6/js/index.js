const router = new VueRouter({
    mode: 'history',
    base: "rutas",
    routes: [
        {
            path: "/listapersonas",
            component: ListaPersonas
        },
        {
            path: "/listaprogramas",
            component: ListaProgramas
        }
    ]
})

const app = new Vue({
    el:"#vm",
    router
})