/**
 * Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

For example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
 */

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.list = [];
  this.listCheck = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (!this.listCheck[word]) {
    this.list.push(word);
    this.listCheck[word] = true;
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  var regex = new RegExp("^" + word + "$", "mi");
  const testThis = this.list.filter(v => regex.test(v) === true);

  // // console.log(this.list);
  // console.log(testThis.length > 0, word);
  return testThis.length > 0;
};

/**
 [,"search","search"]
[,["a.d"],["."]]

 */

const test = new WordDictionary();
test.addWord("at"); //null
test.addWord("and"); //null
test.addWord("an"); //null
test.addWord("add"); //null
// test.addWord("mad"); //null
test.search("a"); //false,false,null,true,true,false,false,true,false
test.search(".at"); //false,null,true,true,false,false,true,false
test.addWord("bat"); //null,true,true,false,false,true,false
test.search(".at"); //true,true,false,false,true,false
test.search("an."); //true,false,false,true,false
test.search("a.d."); //false,false,true,false
test.search("b."); //,false,true,false
test.search("a.d"); //,true,false
test.search("."); //,false
