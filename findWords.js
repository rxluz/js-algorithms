/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const lines = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return words.filter(
    word =>
      word
        .toLocaleLowerCase()
        .split("")
        .every(w => lines[0].indexOf(w) > -1) ||
      word
        .toLocaleLowerCase()
        .split("")
        .every(w => lines[1].indexOf(w) > -1) ||
      word
        .toLocaleLowerCase()
        .split("")
        .every(w => lines[2].indexOf(w) > -1),
  );
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
