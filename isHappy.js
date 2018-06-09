/**
 * @param {number} n
 * @return {boolean} //improve this, analyse duplicated numbers in this recursive, with this numbers will be possible to detect a non happy number faster
 */
var isHappy = function(n, interation = 1) {
  const nums = [];
  for (const num of n.toString()) {
    nums.push(num ** 2);
  }

  const numsAmount = nums.reduce((accum, val) => accum + val);

  if (interation > 100) {
    return false;
  }
  return numsAmount === 1 ? true : isHappy(numsAmount, interation + 1);
};
