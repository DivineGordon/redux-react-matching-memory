const path=require("path");
module.exports={
entry:'./index.js',

mode:"development",
output:{
filename:"app.bundle.js",
path:path.resolve(__dirname,"./dist")

},
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "C:/Users/Gordon/AppData/Roaming/npm/node_modules/babel-loader",
        options: {
          presets: [ "C:/Users/Gordon/AppData/Roaming/npm/node_modules/@babel/preset-react"
          ]
        }
      }
    }
  ]
}

}