/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const allCapitals = !/[a-z]/g.test(word);
  const allLowerCase = !/[A-Z]/g.test(word);
  const initialCapital = /^[A-Z]{1}[a-z]{1,}$/.test(word);

  return allCapitals || allLowerCase || initialCapital;
};

console.log(detectCapitalUse("g"));
