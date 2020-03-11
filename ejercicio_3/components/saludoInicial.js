// Aquí iniciamos un componente, con la sintaxis básica. El archivo de origen se llama saludoInical.js por lo tanto el primer parametro del componente es el nombre del archivo pero separado por un guion y todo en minúscula. El segundo parametro es el objeto del componente, el cual, esta formado por el template, los datos, entre otros.
Vue.component('saludo-inicial',{
    //en este template, simplemente se arma una estructura basica de HTML y se utiliza la variable que tenemos en la data. Para renderizar la variable se usa doble llave {{}}
    template: `
        <header>
            <h1>{{titulo}}</h1>
        </header>`,
    // la data será una función que retorna un objeto. El cual, tandrá un par de llave-valor. 
    data(){
        return {
            //llave      valor
            titulo: `Iniciando VueJS`
        }
    }
});