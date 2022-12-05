import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2022/RequireObjectCoercible.js';

import getPolyfill from 'set.prototype.intersection/polyfill';

const bound = callBind(getPolyfill());

export default function intersection(set, other) {
	RequireObjectCoercible(set);
	return bound(set, other);
}

export { default as getPolyfill } from 'set.prototype.intersection/polyfill';
export { default as implementation } from 'set.prototype.intersection/implementation';
export { default as shim } from 'set.prototype.intersection/shim';
