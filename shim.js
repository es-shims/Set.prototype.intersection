'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');
var shimSet = require('es-set/shim');

module.exports = function shimSetIntersection() {
	shimSet();

	var polyfill = getPolyfill();
	define(
		Set.prototype,
		{ intersection: polyfill },
		{ intersection: function () { return Set.prototype.intersection !== polyfill; } }
	);

	return polyfill;
};
