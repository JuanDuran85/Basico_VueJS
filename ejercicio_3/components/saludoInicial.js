Vue.component('saludo-inicial',{
    template: `
    <header>
        <h1>{{titulo}}</h1>
    </header>`,
    data(){
        return {
            titulo: `Iniciando VueJS`
        }
    }
})