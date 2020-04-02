/* Componente de VueJS 
se incia con la palabra Vue posteriormente la palabra component como estructura inicial. El componente de VueJS recibe como primer parametro el nombre del componenete (separadas por un guion, esto evita conflictos con elementos HTML existentes y futuros, ya que todos los elementos HTML son una sola palabra), mientras que el segundo parametro es un objeto que tiene toda la información que necesita el componente para trabajar. Una de ellas es el template, lo cual, es el html que llevara el documento. La otra es la data que se quiere interpolar.

Nota Importante: En el template solo puede existir una estructura padre. No pueden existir mas porque la compilación generará error.
*/
Vue.component('componente-inicial',{
    template: `
        <main>
            <div>
                div etiqueta
            </div>
            <header>
                <h1 class="clase1">{{titulo}}</h1>
            </header>
            <button type="button" class="btn btn-primary">Boton</button>
            <article>Articulo</article>
            <footer>Footer</footer>
        </main>
    `,
    data(){
        return {
            titulo: `Iniciando VueJS`
        }
    }
});