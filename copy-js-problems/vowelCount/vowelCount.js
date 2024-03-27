
function vowelCount(phrase) {
  const vowelFreq = {};
  const vowels = "aeiou";

  for (const char of phrase.toLowerCase()) {

    if (vowels.includes(char)) {

      if (char in vowelFreq) {
        vowelFreq[char]++;
      } else {
        vowelFreq[char] = 1;
      }

    }
  }

  return vowelFreq;
}

export { vowelCount };
