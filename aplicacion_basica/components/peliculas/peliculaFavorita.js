//hijo de propComponent
let peliculaFavorita = {
    template: `
        <div v-show="mostrar" class="feeds">
            <div class="feed" id="feed2">
                <div class="actions" :id="'fav-'+_uid">
                    <div class="heart" id="corazon"></div>
                </div>
            </div>
        </div>
    `,
    props: {
        mostrar: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    mounted() {
        let vm = this;
        let $element = document.getElementById(`fav-${this._uid}`);
        $element.addEventListener('animationend', function(){
            vm.$emit("update:mostrar",false);
        });
    },
}