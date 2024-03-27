
function validAnagram(word1, word2) {
  return word1.split("").sort().join("") === word2.split("").sort().join("");
}

export { validAnagram };
