function isPalindrome(string) {
  var stringHandled = string.match(/[a-z]/gi).join("");

  var stringBack = "";

  for (var x = stringHandled.length - 1; x >= 0; x--) {
    stringBack = stringBack + stringHandled[x];
  }

  return stringBack.toLowerCase() === stringHandled.toLowerCase();
}

console.log(isPalindrome("Madam, I'm adam"));
