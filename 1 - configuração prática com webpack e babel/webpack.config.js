const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                //regra para arquivos javaScript e JSX
                test: /\.(js|jsx)?$/,
                //exclui a pasta node_modules para não processar os arquivos de dependências
                exclude: /node_modules/,
                //usa o babel-loader para transpilar o código JavaScript e JSX
                use: {
                    loader: 'babel-loader'
                },
            },
        ],
    },
    plugins: [
        //Plugin para gerar o arquivo HTML e incluir o bundle.js
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    // Condifurações  de  arquivos serem resolvidas automaticamente
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //Configurações  do servidor de desenvolvimento
    devServer: {
        static: {   
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
    },
};