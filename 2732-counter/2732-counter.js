
var createCounter = function(n) {
    let n_ = n;
    return function() {
        return n_++;
    };
};
