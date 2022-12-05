'use strict';

var Set = require('es-set/polyfill')();

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Set.prototype.intersection === 'function' ? Set.prototype.intersection : implementation;
};
