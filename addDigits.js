/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  var endNum = num;
  endNum = endNum
    .toString()
    .split("")
    .reduce((acum, value) => parseInt(acum) + parseInt(value));

  if (parseInt(endNum) > 9) {
    endNum = parseInt(endNum)
      .toString()
      .split("")
      .reduce((acum, value) => parseInt(acum) + parseInt(value));
  }

  if (parseInt(endNum) > 9) {
    endNum = parseInt(endNum)
      .toString()
      .split("")
      .reduce((acum, value) => parseInt(acum) + parseInt(value));
  }

  return parseInt(endNum);
};

var x = 1;
var max_number = 99999993;
console.log("start running");
while (x < max_number) {
  const percent = Math.round(100 / max_number * x);

  if (
    percent == 1 ||
    percent == 2 ||
    percent == 10 ||
    percent == 25 ||
    percent == 50
  ) {
    console.log("percent", percent);
  }
  if (addDigits(x) > 9) {
    console.log("problems in the number", x);
  }

  x++;
}

console.log("runned at ", x);
