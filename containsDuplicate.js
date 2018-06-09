// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var containsDuplicate = function(nums) {
  const numsSort = nums.sort();

  return !numsSort.every(
    (num, idxx, arr) =>
      !numsSort.some((numm, idx) => idx !== idxx && numm === num),
  );
};

console.log(containsDuplicate([1, 2, 3, 4, 3]));
