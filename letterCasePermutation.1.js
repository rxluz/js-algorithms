/*

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length at most 12.
S will consist only of letters or digits.

*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  var list = [];

  var convert = item => (Array.isArray(item) ? item.join("") : item);

  var add = item =>
    list.filter(v => v === convert(item)).length === 0
      ? list.push(convert(item))
      : null;

  add(S);
  add(S.toLowerCase());
  add(S.toUpperCase());

  sArr = S.split("");
  sArr.forEach((value, index, elem) => {
    elem[index] = value.toLowerCase();

    add(elem);

    elem[index] = value.toUpperCase();
    add(elem);
  });

  return list;
};

console.log(letterCasePermutation("Jw"));
