var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //tanto los nombres de entrada y salida por defecto, se pueden mmodificar agregando el archivo de configuracion de webpack y modificando manualmente cada uno de los parametros
    entry: './src/index.js',
    output: {
        filename: 'main.js'      
    },
    plugins: [new HtmlWebpackPlugin()]
};