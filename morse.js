/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  //store the morse codes
  const wordInMorseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  //store the english letter in alphabetic order
  const englishAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //create a array to connect a letter with the code
  const lettersAndMorse = englishAlphabet.reduce((acum, val, currentIndex) => {
    acum[englishAlphabet[currentIndex]] = wordInMorseCode[currentIndex];
    return acum;
  }, {});

  let generatedMorseList = [];
  let totalDifferentWords = 0;

  //create a loop to analyse the words array
  for (const word of words) {
    let morseWord = "";
    //create a loop to analyse the letters in the word, in the end of loop will be a new word in morse code
    for (const letter of word) {
      //generates the morse code to this letter
      morseWord = `${morseWord}${lettersAndMorse[letter]}`;
    }

    //put this generated code in a array
    generatedMorseList.push(morseWord);

    //count the number of times of this item in a array, if is 1 increments the total
    if (generatedMorseList.filter(v => v === morseWord).length == 1) {
      totalDifferentWords++;
    }
  }

  //returns the number os combination
  return totalDifferentWords;
};
