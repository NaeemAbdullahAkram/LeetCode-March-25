/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let flips = 0;
  let minFlips = blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (i - k >= 0 && blocks[i - k] !== "B") {
      flips--;
    }
    if (blocks[i] !== "B") flips++;

    if (i + 1 - k >= 0) minFlips = Math.min(minFlips, flips);
  }

  return minFlips;
};