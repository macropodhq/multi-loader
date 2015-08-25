# Multiplex Loader

This loader requires a module with several loaders. Each loader's exports are returned using the same key as they are configured under.

Example:

``` javascript
var multiplex = require('multiplex-loader');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: multiplex({
					placeholder: 'resize-image?placeholder=303',
					srcset: 'image-webpack!resize-image?sizes[]=303w,sizes[]=606w',
					src: 'image-loader',
				}),
			},
		],
	},
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
