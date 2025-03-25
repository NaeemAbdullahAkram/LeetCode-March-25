/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const FilterArr = [];
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            FilterArr.push(arr[i]);
        }
    }
    return FilterArr;
};
