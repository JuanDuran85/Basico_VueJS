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
    data() {
        return {
            mensaje: "información desde el hijo peliculaFavorita - data de ejemplo"
        }
    },
    props: {
        mostrar: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    methods: {
        mostrarMensaje(){
            console.log(`Mensaje llamado desde el padre --> PATITO`);
            alert(`Mensaje desde Hijo: ${this.mensaje}`);
        }
    },
    beforeCreate() {
        console.log("mensaje desde pelicula favorita beforecreate");
    },
    mounted() {
        let vm = this;
        let $element = document.getElementById(`fav-${this._uid}`);
        $element.addEventListener('animationend', function(){
            //vm.$emit("ocultarFav",false);
            vm.$emit("update:mostrar",false);
        });
        console.log("Mounted desde peliculaFavorita");
    },
}