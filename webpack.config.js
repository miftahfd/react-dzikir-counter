module.exports = {
	entry: {
		app: ["./src/main.js"]
	},
	output: {
		path: __dirname + "./public/code",
		publicPath: "/code/",
		filename: "bundle.js"
	},
	module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: "babel-loader",
	      include: __dirname,
	      query: {
	        presets: [ 'es2015', 'react' ]
	      }
	    }]
  	}
}