/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const list = [];
  nums.sort().forEach((val, idx) => {
    var next = nums[idx + 1] || "n";
    var prev = nums[idx - 1] || "n";
    if (val !== next && val !== prev) {
      list.push(val);
    }
  });

  return list;
};

var singleNumber = nums =>
  nums.filter(v => nums.filter(e => e == v).length == 1);

var singleNumber = nums => {
  var list = [];
  for (var x = 0; x < nums.length; x = x + 2) {
    if (nums[x] !== nums[x + 1]) {
      list.push(nums[x]);
    }
  }

  return list;
};
