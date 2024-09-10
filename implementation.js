'use strict';

// Note: the commented out code is because there is no performant way in userland to do the optimization in step 6.

var $TypeError = require('es-errors/type');

var $Set = require('es-set/polyfill')();

var Call = require('es-abstract/2024/Call');
var GetIteratorFromMethod = require('es-abstract/2024/GetIteratorFromMethod');
var GetSetRecord = require('./aos/GetSetRecord');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var SetDataHas = require('./aos/SetDataHas');
var ToBoolean = require('es-abstract/2024/ToBoolean');

var forEach = require('es-abstract/helpers/forEach');

var callBind = require('call-bind');
var callBound = require('call-bind/callBound');
var isSet = require('is-set');

var tools = require('es-set/tools');
var $setForEach = tools.forEach;
var $setAdd = tools.add;
var $setSize = tools.size;

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

	var thisSize = $setSize(O); // SetDataSize(O.[[SetData]]); // step 5.a
	if (thisSize <= otherRec['[[Size]]']) { // step 5
		var index = 0; // step 5.b
		$setForEach(O, function (e) {
			if (index < thisSize) { // step 5.c
				index += 1; // step 5.c.ii
				var inOther = ToBoolean(Call(otherRec['[[Has]]'], otherRec['[[SetObject]]'], [e])); // step 5.c.iii.1
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
		var keysIter = GetIteratorFromMethod(otherRec['[[SetObject]]'], otherRec['[[Keys]]']); // step 6.a
		var next; // step 6.b
		while (!keysIter['[[Done]]']) { // step 6.c
			next = IteratorStepValue(keysIter); // step 6.c.i
			if (!keysIter['[[Done]]']) { // step 6.c.ii
				if (next === 0) { // step 6.c.ii.1
					next = +0;
				}
				var alreadyInResult = SetDataHas(resultSetData, next); // step 6.c.ii.3
				var inThis = $setHas(O, next); // step 6.c.ii.4
				if (!alreadyInResult && inThis) { // step 6.c.ii.5
					$push(resultSetData, next); // step 6.c.ii.5.a
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
