const findLongestWord = function (string) {
  string = string.split(" ");

  let longestWord = string[0];
  for (str of string) {
    if (str.length > longestWord.length) {
      longestWord = str;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
