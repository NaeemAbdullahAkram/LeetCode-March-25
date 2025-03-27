
var compose = function (functions) {
  return function composeInner(x, innerFns = functions) {
    if (innerFns.length < 1) return x;
    return composeInner(innerFns[innerFns.length - 1](x), innerFns.slice(0, -1));
  };
};
