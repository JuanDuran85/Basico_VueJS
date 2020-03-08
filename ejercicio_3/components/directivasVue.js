Vue.component('directivas-vue', {
    template: `
        <div>
            <p v-text="texto"></p>
        </div>
    `,
    data() {
        return {
            texto: "segundo componente con Directica v-text"
        }
    },
});