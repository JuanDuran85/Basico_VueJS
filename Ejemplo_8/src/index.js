import Vue from 'Vue';
import componente from './components/componente.vue';

const app = new Vue({
    el: "#app",
    render: h => h(componente)
})