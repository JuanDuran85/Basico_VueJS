const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    //tanto los nombres de entrada y salida por defecto, se pueden mmodificar agregando el archivo de configuracion de webpack y modificando manualmente cada uno de los parametros
    entry: './src/index.js',
    output: {
        filename: 'main.js'      
    },
    module: {
        rules: [
          // ... other rules
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.js$/,
            loader: 'babel-loader'
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ]
};