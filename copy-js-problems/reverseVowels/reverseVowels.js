
function reverseVowels(str) {
  const vowels = "aeiouAEIOU";

  const vowelsFromStr = [];

  //gather vowel objects
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.includes(char)) {
      vowelsFromStr.push(char);
    }
  }

  const newStr = str.split("");

  //insert the swapped vowels
  for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i];
    if (vowels.includes(char)) {
      newStr[i] = vowelsFromStr.pop();
    }
  }

  return newStr.join("");
}



//first version using indexes
function reverseVowels1(str) {
  const vowels = "aeiouAEIOU";

  const vowelPlacements = [];

  //gather vowel objects
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.includes(char)) {
      vowelPlacements.push({ char, i });
    }
  }

  //swap vowels
  for (let i = 0; i < Math.floor(vowelPlacements.length / 2); i++) {
    const first = vowelPlacements[i].char;
    const last = vowelPlacements[vowelPlacements.length - (1 + i)].char;

    vowelPlacements[i].char = last;
    vowelPlacements[vowelPlacements.length - (1 + i)].char = first;
  }

  const newStr = str.split("");

  //insert the swapped vowels
  for (let { char, i } of vowelPlacements) {
    newStr[i] = char;
  }

  return newStr.join("");
}


export { reverseVowels };
