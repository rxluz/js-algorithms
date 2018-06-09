/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//   //remove all zeros from array and add in initial array
//   const newArray = nums.filter(v => v !== 0);
//   const zeros = nums.filter(v => v === 0);

//   return [...newArray, ...zeros];
//   //count the number of zeros and add them in the end
// };

// var moveZeroes = nums => [
//   ...nums.filter(v => v !== 0),
//   ...nums.filter(v => v === 0),
// ];

var moveZeroes = nums => {
  var zerosToAdd = 0;
  for (var x = 0; x < nums.length; x++) {
    if (nums[x] === 0) {
      nums[x] = nums[x + 1];
      // console.log("he");
      zerosToAdd++;
      //nums.push(0);
    }
  }

  for (var x = 0; x < zerosToAdd; x++) {
    nums.push(0);
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
