'use strict';

var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var fnNamesConfigurable = require('functions-have-names').functionsHaveConfigurableNames();
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

module.exports = function (t) {
	t.equal(Set.prototype.intersection.length, 1, 'Set.prototype.intersection has a length of 1');
	t.test('Function name', { skip: !fnNamesConfigurable }, function (st) {
		st.equal(Set.prototype.intersection.name, 'intersection', 'Set.prototype.intersection has name "intersection"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Set.prototype, 'intersection'), 'Set.prototype.intersection is not enumerable');
		et.end();
	});

	t.test('bad object value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return Set.prototype.intersection.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Set.prototype.intersection.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Set.prototype.intersection), t);
};
