/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var maxFound = 0;
  var currentMax = 0;
  nums.forEach(num => {
    if (num === 1) {
      currentMax++;
      maxFound = currentMax > maxFound ? currentMax : maxFound;
    } else {
      currentMax = 0;
    }
  });

  return maxFound;
};
