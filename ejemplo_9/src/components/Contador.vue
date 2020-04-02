<template>
    <div>
        <button @click="incremento">Clic ++</button>
        <span>Valor del Contador {{conta}}</span>
    </div>
</template>

<script>
export default {
    name: "Contador",
    data() {
        return {
            conta: 0
        }
    },
    methods: {
        incremento(){
            this.conta++;
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>