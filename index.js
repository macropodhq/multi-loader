var loader = require.resolve('./index.loader.js')

module.exports = function(items) {
	return loader + '?' + JSON.stringify(items).replace(/!/g, '\\u0021');
};
