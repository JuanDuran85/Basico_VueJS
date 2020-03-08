/* Componente de VueJS 
se incia con la palabra Vue posteriormente la palabra component como estructura inicial. El componente de VueJS recibe como primer parametro el nombre del componenete (separadas por un guion, esto evita conflictos con elementos HTML existentes y futuros, ya que todos los elementos HTML son una sola palabra), mientras que el segundo parametro es un objeto que tiene toda la informacion ue necesita el componente para trabajar. Una de ellas es el template, lo cual, es el html que llevara el documento. La otra es la data que se quiere interpolar.
*/

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