'use strict';

// Note: the commented out code is because there is no performant way in userland to do the optimization in step 7.

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $Set = require('es-set/polyfill')();

var isNativeSet = typeof Set === 'function' && $Set === Set;

var Call = require('es-abstract/2022/Call');
var IteratorStep = require('es-abstract/2022/IteratorStep');
var IteratorValue = require('es-abstract/2022/IteratorValue');
var ToBoolean = require('es-abstract/2022/ToBoolean');
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
// var forEach = require('es-abstract/helpers/forEach');

var GetSetRecord = require('./aos/GetSetRecord');
var GetKeysIterator = require('./aos/GetKeysIterator');
// var SetDataHas = require('./aos/SetDataHas');

var isSet = require('is-set');

var callBind = require('call-bind');
var callBound = require('call-bind/callBound');
var iterate = require('iterate-value');

var $nativeSetForEach = callBound('Set.prototype.forEach', true);
var $polyfillSetForEach = $Set.prototype.forEach && callBind($Set.prototype.forEach);
var $setForEach = function (set, callback) {
	if ($nativeSetForEach) {
		try {
			return $nativeSetForEach(set, callback);
		} catch (e) { /**/ }
	}
	if ($polyfillSetForEach) {
		return $polyfillSetForEach(set, callback);
	}
	iterate(set, callback);
	return void undefined;
};

// var $nativeSetHas = callBound('Set.prototype.has', true);
// var $polyfillSetHas = $Set.prototype.has && callBind($Set.prototype.has);
// var $setHas = function (set, key) {
// 	if ($nativeSetHas) {
// 		try {
// 			return $nativeSetHas(set, key);
// 		} catch (e) { /**/ }
// 	}
// 	return $polyfillSetHas(set, key);
// };

var $nativeSetAdd = callBound('Set.prototype.add', true);
var $polyfillSetAdd = $Set.prototype.add && callBind($Set.prototype.add);
var $setAdd = function (S, v) {
	if ($nativeSetAdd) {
		try {
			return $nativeSetAdd(S, v);
		} catch (e) { /**/ }
	}
	return $polyfillSetAdd(S, v);
};
var $setSize = isNativeSet ? callBound('Set.prototype.size') : gOPD ? callBind(gOPD($Set.prototype, 'size').get) : function setSize(set) {
	var count = 0;
	$setForEach(set, function () {
		count += 1;
	});
	return count;
};
/*
var $push = callBound('Array.prototype.push');
var $sort = callBound('Array.prototype.sort');
*/

module.exports = function intersection(other) {
	var O = this; // step 1

	// RequireInternalSlot(O, [[SetData]]); // step 2
	if (!isSet(O) && !(O instanceof $Set)) {
		throw new $TypeError('Method Set.prototype.intersection called on incompatible receiver ' + O);
	}

	var otherRec = GetSetRecord(other); // step 3

	// var resultSetData = []; // step 4

	var thisSize = $setSize(O); // step 5

	var result = new $Set();

	// if (thisSize <= otherRec['[[Size]]']) { // step 6
	$setForEach(O, function (e) {
		var inOther = ToBoolean(Call(otherRec['[[Has]]'], otherRec['[[Set]]'], [e])); // step 6.b.iii.1
		if (inOther) { // step 6.b.iii.2
			// var alreadyInResult = SetDataHas(resultSetData, e); // step 6.b.iii.2.b
			// if (alreadyInResult) { // step 6.b.iii.2.c
			// $push(resultSetData, e); // step 6.b.iii.c.i
			$setAdd(result, e); // step 6.b.iii.c.i
			// }
		}
	});

	// return result; // this is an optimization to avoid iterating `resultSetData`
	/*
		// eslint-disable-next-line no-else-return
	} else { // step 7
	*/
	if (thisSize > otherRec['[[Size]]']) {
		var keysIter = GetKeysIterator(otherRec); // step 7.a
		var next = true; // step 7.b
		while (next) { // step 7.c
			next = IteratorStep(keysIter['[[Iterator]]']); // step 7.c.i
			if (next) { // step 7.c.ii
				// var nextValue = IteratorValue(next); // step 7.c.ii.1
				IteratorValue(next);
				/*
				if (nextValue === 0) { // step 7.c.ii.2
					nextValue = +0;
				}
				var alreadyInResult = SetDataHas(resultSetData, nextValue); // step 7.c.ii.4
				var inThis = $setHas(O, nextValue); // step 7.c.ii.5
				if (!alreadyInResult && inThis) { // step 7.c.ii.6
					$push(resultSetData, nextValue); // step 7.c.ii.6.a
				}
				*/
			}
		}
		/*
		$sort(resultSetData, function (a, b) { // step 7.e
		});
		*/
	}

	// var result = OrdinaryObjectCreate(%Set.prototype%, « [[SetData]] »); // step 8

	// result.[[SetData]] = resultSetData; // step 9
	/*
	forEach(resultSetData, function (e) {
		$setAdd(result, e);
	});
	*/

	return result; // step 10
};
