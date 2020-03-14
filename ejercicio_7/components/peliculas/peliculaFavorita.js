let peliculaFavorita = {
    template: `
        <div class="feeds">
            <div class="feed" id="feed2">
                <div class="actions">
                    <div class="heart" id="corazon"></div>
                </div>
            </div>
        </div>
    `,
    beforeCreate() {
        console.log("beforeCreate desde peliculaFavorita");
    },
    created() {
        console.log("Create desde peliculaFavorita");
    },
    beforeMount() {
        console.log("beforeMount desde peliculaFavorita");
    },
    mounted() {
        console.log("Mounted desde peliculaFavorita");
    },
    beforeUpdate() {
        console.log("beforeUpdate desde peliculaFavorita");
    },
    updated() {
        console.log("Updated desde peliculaFavorita");
    },
    beforeDestroy() {
        console.log("beforeDestroy desde peliculaFavorita");
    },
    destroyed() {
        console.log("Destroyed desde peliculaFavorita");
    },
}