'use strict';

var $TypeError = require('es-errors/type');

var IsArray = require('es-abstract/2024/IsArray');
var SameValueZero = require('es-abstract/2024/SameValueZero');

var some = require('es-abstract/helpers/some');

module.exports = function SetDataHas(setData, value) {
	if (!IsArray(setData)) {
		throw new $TypeError('`setData` must be a List');
	}

	// if (SetDataIndex(setData, value) === 'NOT-FOUND') { return false; } // step 1
	// return true; // step 2

	return some(setData, function (e) {
		return SameValueZero(e, value);
	});
};
