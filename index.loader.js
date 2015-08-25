module.exports = function() {};
module.exports.pitch = function(request) {
	this.cacheable();

	var items = JSON.parse(this.query.substr(1));

	return 'module.exports={' + Object.keys(items).map(function(itemName) {
		return '\'' + itemName + '\': require(' + JSON.stringify('-!' + items[itemName] + '!' + request) + '),';
	}).join("\n") + '};';
};
