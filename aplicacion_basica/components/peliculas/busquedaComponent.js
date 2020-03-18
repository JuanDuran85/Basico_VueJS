let busquedaComponent = {
    template: `
    <div>
        <form @submit.prevent="buscar" class="form-inline md-form form-sm mt-0">
            <div class="input-group md-form form-sm form-2 pl-0 w-100">
                <div v-show="query" class="input-group-append">
                    <span class="btn btn-danger">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
                <input class="form-control my-0 py-1 green-border" 
                    type="text" 
                    placeholder="Buscar" 
                    aria-label="Buscar" v-model="query">
                <div class="input-group-append">
                    <button class="input-group-text green">
                        <i class="fas fa-search text-grey"
                        aria-hidden="true">
                        </i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    `,
    data() {
        return {
            query: ''
        }
    },
    methods: {
        buscar(){
            let URL = `${URL_BASICA}search/movie?api_key=${APIKEY}&language=en-US&query=${this.query}`;
            fetch(URL)
                .then(respuesta => respuesta.json())
                .then(json => {
                    console.log(json);
                    this.$emit('input',json);
                })
                .catch(error => console.log(error));
        }
    },
}