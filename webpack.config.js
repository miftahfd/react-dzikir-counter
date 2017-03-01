module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/public/code',
		filename: 'bundle.js'
	},
	devServer: {
		port: 3000,
		contentBase: __dirname + '/public',
		inline: true
	},
	module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: "babel-loader",
	      query: {
	        presets: [ 'es2015', 'react' ]
	      }
	    }]
  	}
}