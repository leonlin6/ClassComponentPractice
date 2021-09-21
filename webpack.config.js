const path = require('path');
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {       
        test: /\.css$/,
        use: ["style-loader", "css-loader"],       
      },
    ]
  },
  // ------ 加入以下內容 ------
  devServer: {
   contentBase: './build', // 本來打包完的檔案位置
    port: 8080 // 預覽網頁要跑在哪個port
  }
};
