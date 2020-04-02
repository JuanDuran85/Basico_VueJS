<template>
    <div>
        <p>Mensaje desde el componente con extensión vue</p>
        <button @click="alerta">Clic Aquí</button>
    </div>
</template>

<script>
//logica de la aplicación
export default {
    name: "componente",
    data() {
        return {
            
        }
    },
    methods: {
        alerta(){
            alert("mensaje desde componente con extension vue");
        }
    },
}
</script>

<style lang="stylus">

</style>