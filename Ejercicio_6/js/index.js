const router = new VueRouter({
    mode: 'history',
    base: "rutas",
    routes: [
        {
            path: "/componente_1",
            component: Componente_1
        }
    ]
})

const app = new Vue({
    el:"#vm",
    router
})