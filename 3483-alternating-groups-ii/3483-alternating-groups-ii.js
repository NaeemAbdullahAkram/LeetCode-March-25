/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    const n = colors.length;
    if (n < k) { return 0; }
    let count = 0;
    let validGroups = 0;
    let alternatingCount = 1;
    
    for (let i = 1; i < n; i++) {
        if (colors[i] !== colors[i - 1]) {
            alternatingCount++;
        }
        else {
            alternatingCount = 1;
        }
        if (alternatingCount >= k) {
            validGroups++;
        }
    }
    
    for (let i = 0; i < k - 1; i++) {
        if (colors[i] !== colors[(n + i - 1) % n]) {
            alternatingCount++;
        }
        else {
            alternatingCount = 1;
        }
        if (alternatingCount >= k) {
            validGroups++;
        }
    }
    
    return validGroups;    
};