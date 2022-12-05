import bound from 'set.prototype.intersection';
import * as Module from 'set.prototype.intersection';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	t.test('bad receiver', (st) => {
		st.throws(() => bound(undefined), TypeError, 'undefined is not an object');
		st.throws(() => bound(null), TypeError, 'null is not an object');
		st.end();
	});

	runTests(bound, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(Module).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = Module;
	t.equal((await import('set.prototype.intersection/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('set.prototype.intersection/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('set.prototype.intersection/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
