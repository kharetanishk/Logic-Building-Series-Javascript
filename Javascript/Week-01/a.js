//Write a function to count the number of vowels

const countVowels = (string) => {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  let chars = string.split("");

  for (let char of chars) {
    if (vowels.includes(char.toLowerCase())) {
      counter++;
    }
  }

  return counter;
};

console.log(countVowels("hello world"));

countVowels("hello world");
