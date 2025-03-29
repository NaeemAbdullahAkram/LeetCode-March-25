/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isFn = true;
    return function(...args) {
        if (isFn) {
            const res = fn(...args);
            isFn = false;
            return res;
        };
        return undefined;
    };
};