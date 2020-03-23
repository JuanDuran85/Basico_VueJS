const Seccion1 = { 
    template: `
        <div>
            <p>Mensaje desde la <b>Sección 1</b> con la Vue Router</p>
        </div>
    `
};
const Seccion2 = { 
    template: `
        <div>
            <p>Mensaje desde la <b>Sección 2</b> con la Vue Router</p>
        </div>
    `
};

const routes = [
    { 
        name: "Seccion_1",
        path: '/seccion1', 
        component: Seccion1 
    },
    { 
        name: "Seccion_2",
        path: '/seccion2', 
        component: Seccion2 
    }
  ];

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el:"#vm",
    router,
    data() {
        return {
            
        }
    },
})