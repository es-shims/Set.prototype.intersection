'use strict';

// Note: the commented out code is because there is no performant way in userland to do the optimization in step 6.

var $TypeError = require('es-errors/type');

var $Set = require('es-set/polyfill')();

var Call = require('es-abstract/2023/Call');
var GetIteratorFromMethod = require('es-abstract/2023/GetIteratorFromMethod');
var GetSetRecord = require('./aos/GetSetRecord');
var IteratorStep = require('es-abstract/2023/IteratorStep');
var IteratorValue = require('es-abstract/2023/IteratorValue');
var SetDataHas = require('./aos/SetDataHas');
var SetDataSize = require('./aos/SetDataSize');
var ToBoolean = require('es-abstract/2023/ToBoolean');

var forEach = require('es-abstract/helpers/forEach');

var callBind = require('call-bind');
var callBound = require('call-bind/callBound');
var isSet = require('is-set');

var tools = require('es-set/tools');
var $setForEach = tools.forEach;
var $setAdd = tools.add;

var $push = callBound('Array.prototype.push');
var $setHas = callBind($Set.prototype.has);

module.exports = function intersection(other) {
	var O = this; // step 1

	// RequireInternalSlot(O, [[SetData]]); // step 2
	if (!isSet(O) && !(O instanceof $Set)) {
		throw new $TypeError('Method Set.prototype.intersection called on incompatible receiver ' + O);
	}

	var otherRec = GetSetRecord(other); // step 3

	var resultSetData = []; // step 4

	var thisSize = SetDataSize(O); // step 5.a
	if (thisSize <= otherRec['[[Size]]']) { // step 5
		var index = 0; // step 5.b
		$setForEach(O, function (e) {
			if (index < thisSize) { // step 5.c
				index += 1; // step 5.c.ii
				var inOther = ToBoolean(Call(otherRec['[[Has]]'], otherRec['[[Set]]'], [e])); // step 5.c.iii.1
				if (inOther) { // step 6.c.iii.2
					var alreadyInResult = SetDataHas(resultSetData, e); // step 5.c.iii.2.b
					if (!alreadyInResult) { // step 5.c.iii.2.c
						$push(resultSetData, e); // step 5.c.iii.c.i
						thisSize += 1;
					}
				}
			}
		});
	} else { // step 6
		var keysIter = GetIteratorFromMethod(otherRec['[[Set]]'], otherRec['[[Keys]]']); // step 6.a
		var next = true; // step 6.b
		while (next) { // step 6.c
			next = IteratorStep(keysIter); // step 6.c.i
			if (next) { // step 6.c.ii
				var nextValue = IteratorValue(next); // step 6.c.ii.1

				if (nextValue === 0) { // step 6.c.ii.2
					nextValue = +0;
				}
				var alreadyInResult = SetDataHas(resultSetData, nextValue); // step 6.c.ii.4
				var inThis = $setHas(O, nextValue); // step 6.c.ii.5
				if (!alreadyInResult && inThis) { // step 6.c.ii.6
					$push(resultSetData, nextValue); // step 6.c.ii.6.a
				}
			}
		}
	}

	// var result = OrdinaryObjectCreate(%Set.prototype%, « [[SetData]] »); // step 7
	var result = new $Set();

	// result.[[SetData]] = resultSetData; // step 8
	forEach(resultSetData, function (e) {
		$setAdd(result, e);
	});

	return result; // step 9
};
