
var pivotArray = function (nums, pivot) {
    let less = [], equal = [], greater = [];

    for (let num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    return [...less, ...equal, ...greater];
};