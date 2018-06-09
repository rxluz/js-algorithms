var majorityElement = function(nums) {
  //creates a array with the amount of occurencies of a number
  const mostFrequentNumber = {
    number: 0,
    occurencies: 0,
  };

  const occurencies = nums.reduce((acum, value) => {
    acum[value] = (acum[value] || 0) + 1;

    if (mostFrequentNumber.occurencies < acum[value]) {
      mostFrequentNumber.number = value;
      mostFrequentNumber.occurencies = acum[value];
    }

    return acum;
  }, {});

  return mostFrequentNumber.number;
};
