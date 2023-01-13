'use strict';

var $Set = require('es-set/polyfill')();
var forEach = require('for-each');
var v = require('es-value-fixtures');
var debug = require('object-inspect');

var setEqual = function compareSetLikes(t, actual, expected, msg) {
	t.test('setlikes: ' + msg, function (st) {
		st.ok(actual instanceof expected.constructor, 'actual is an instance of the expected constructor');
		st.ok(expected instanceof actual.constructor, 'expected is an instance of the actual constructor');
		st.equal(actual.size, expected.size, 'they have the same size');

		if (actual.forEach) {
			actual.forEach(function (x) {
				st.ok(expected.has(x), debug(x) + ' (in actual) is in the expected set');
			});
		}

		if (expected.forEach) {
			expected.forEach(function (x) {
				st.ok(actual.has(x), debug(x) + ' (in expected) is in the actual set');
			});
		}

		st.end();
	});
};

module.exports = function (intersection, t) {
	t.test('throws on non-set receivers', function (st) {
		forEach(v.primitives.concat(v.objects), function (nonSet) {
			st['throws'](
				function () { intersection(nonSet, {}); },
				TypeError,
				debug(nonSet) + ' is not a Set'
			);
		});

		st.end();
	});

	t.test('non-Setlike `other`', function (st) {
		var set = new $Set([1, 2]);

		forEach(v.primitives, function (primitive) {
			st['throws'](
				function () { intersection(set, primitive); },
				TypeError,
				debug(primitive) + ' is not a Set-like'
			);
		});

		st.test('unable to get a Set Record', function (s2t) {
			forEach(v.objects, function (nonSetlike) {
				s2t['throws'](
					function () { intersection(set, nonSetlike); },
					TypeError,
					debug(nonSetlike) + ' is an Object, but is not Set-like'
				);
			});

			forEach([NaN, 'NaN'], function (coercibleToNaN) {
				var nanSizedSetlike = {
					has: function () {},
					keys: function () {},
					size: coercibleToNaN // anything that coerces to NaN
				};
				s2t['throws'](
					function () { intersection(set, nanSizedSetlike); },
					TypeError,
					debug(nanSizedSetlike) + ' has a NaN `.size`'
				);
			});

			forEach(v.nonFunctions, function (nonFunction) {
				var badHas = {
					has: nonFunction,
					keys: function () {},
					size: 0
				};
				var badKeys = {
					has: function () {},
					keys: nonFunction,
					size: 0
				};

				s2t['throws'](
					function () { intersection(set, badHas); },
					TypeError,
					debug(badHas) + ' has a non-callable `.has`'
				);
				s2t['throws'](
					function () { intersection(set, badKeys); },
					TypeError,
					debug(badKeys) + ' has a non-callable `.keys`'
				);
			});

			s2t.end();
		});

		st.test('misbehaving `.keys`', function (s2t) {
			var setlikeThrows = {
				has: function () {},
				keys: function () { throw new SyntaxError('keys error'); },
				size: 0
			};

			s2t['throws'](
				function () { intersection(set, setlikeThrows); },
				SyntaxError,
				debug(setlikeThrows) + ' throws when `.keys` is called, on purpose'
			);

			forEach(v.primitives, function (primitive) {
				var primitiveIter = {
					has: function () {},
					keys: function () { return primitive; },
					size: 0
				};
				s2t['throws'](
					function () { intersection(set, primitiveIter); },
					TypeError,
					'setlike `.keys` returning ' + debug(primitive) + ' throws'
				);
			});

			forEach(v.nonFunctions, function (nonFunction) {
				var badIter = {
					has: function () {},
					keys: function () { return { next: nonFunction }; },
					size: 0
				};
				s2t['throws'](
					function () { intersection(set, badIter); },
					TypeError,
					debug(badIter) + ' has a non-callable `.next`'
				);
			});

			s2t.end();
		});

		st.end();
	});

	t.test('intersections', function (st) {
		var set1 = new $Set([1, 2, 3]);
		var set2 = new $Set([4, 5, 6]);
		var result = intersection(set1, set2);

		st.ok(result instanceof $Set, 'returns a Set');
		setEqual(
			st,
			result,
			new $Set([]),
			'returns the intersection of the two sets'
		);

		var set3 = new $Set([1, 2, 3]);
		var set4 = new $Set([3, 4, 5]);
		var result2 = intersection(set3, set4);

		st.ok(result2 instanceof $Set, 'returns a Set when sets have overlapping elements');
		setEqual(
			st,
			result2,
			new $Set([3]),
			'returns the intersection of the two sets with overlapping elements'
		);

		var setLikeIter = {
			has: function (x) { return x >= 0 && x % 2 === 0 && x < 10; },
			keys: function () {
				var i = 0;
				return {
					next: function fakeNext() {
						try {
							return {
								done: i >= 10,
								value: i
							};
						} finally {
							i += 2;
						}
					}
				};
			},
			size: 4
		};

		var result3 = intersection(new $Set([1, 2, 3, 4, 5, 6]), setLikeIter);
		st.ok(result3 instanceof $Set, 'returns a Set when `other` is a Set-like with a manual iterator');
		setEqual(
			st,
			result3,
			new $Set([2, 4, 6]),
			'returns the intersection of the two sets with a manual iterator'
		);

		st.end();
	});

	t.test('duplicate elements', function (st) {
		var set = new $Set([1, 2]);

		var setLike = {
			size: Infinity,
			has: function (x) {
				// Remove and then re-add 1.
				if (x === 2) {
					set['delete'](1);
					set.add(1);
				}
				return true;
			},
			keys: function () {
				throw new EvalError('Unexpected call to |keys| method');
			}
		};

		var result = intersection(set, setLike);
		st.ok(result instanceof $Set, 'returns a Set');
		setEqual(
			st,
			result,
			new $Set([1, 2]),
			'returns the intersection of the Set and the setLike'
		);

		st.end();
	});

	return t.comment('tests completed');
};
