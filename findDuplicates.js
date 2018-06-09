/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = nums => nums.sort().filter((n, idx) => nums[idx + 1] == n);

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
