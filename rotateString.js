/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A == B) return true;
  const rotate = letter => {
    const fistLetter = letter.split("")[0];
    return `${letter.substring(1, letter.length)}${fistLetter}`;
  };

  var newWord = B;
  x = 0;
  while (x < B.length) {
    newWord = rotate(newWord);
    if (newWord === A) {
      return true;
    }
    x++;
  }

  return false;
};

console.log(rotateString("", ""));
