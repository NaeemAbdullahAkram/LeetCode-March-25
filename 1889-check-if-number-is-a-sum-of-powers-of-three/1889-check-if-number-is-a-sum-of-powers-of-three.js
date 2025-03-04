/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    let current = 1;
    const powersOfThree = [];

    while (current <= n) {
        powersOfThree.push(current);
        current *= 3;
    }

    for (let p = powersOfThree.length - 1; p >= 0; p--) {
        if (powersOfThree[p] <= n) {
            n -= powersOfThree[p];
        }
    }
    return n === 0;
};