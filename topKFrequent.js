/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //discover the most frequent elements
  const frequency = nums.reduce(
    (acum, value) => (
      (acum[value.toString()] = {
        id: value,
        occurencies: ((acum[value.toString()] || {}).occurencies || 0) + 1,
      }),
      acum
    ),
    {},
  );

  return Object.values(frequency)
    .sort((a, b) => {
      if (a.occurencies > b.occurencies) return -1;
      if (a.occurencies < b.occurencies) return 1;
      return 0;
    })
    .reduce((acum, val) => (acum.push(val.id), acum), [])
    .slice(0, k);
};

console.log(
  topKFrequent(
    [6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0],
    6,
  ),
);
