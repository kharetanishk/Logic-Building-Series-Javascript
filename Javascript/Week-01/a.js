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

console.log(countVowels("aeiou"));
countVowels("hello world");

//Reverse a sentence
function reverseString(string) {
  const reverseArray = [...string].reverse().join("");
  return reverseArray;
}
console.log(reverseString("Hello world"));
console.log(reverseString("TERI MAA KI CHUT"));

//find the missing number
missingNumber = (...args) => {
  let actualSum = 0;
  const sortedNum = args.sort(function (a, b) {
    return a - b;
  });
  const n = sortedNum.length + 1;
  const Expectedsum = (n * (n + 1)) / 2;

  for (let arg of args) {
    actualSum += arg;
  }

  const missingN = Expectedsum - actualSum;
  return missingN;
};

console.log(missingNumber(1, 2, 4, 5));

//sum of only even number inside an array

sumEven = (...args) => {
  const evenNum = [];

  for (let arg of args) {
    if (arg % 2 === 0) {
      evenNum.push(parseInt(arg));
    }
  }

  const sum = evenNum.reduce((acc, x) => (acc += x), 0);
  return sum;
};

console.log(sumEven(1, 10, 22, 11, 100));

//write a function to find first non repeating character

function findNonrepeatingCharacter(string) {
  const obj = {};
  const finaloutput = [];
  for (const char of string) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (const [key, val] of Object.entries(obj)) {
    if (val === 1) {
      finaloutput.push(key);
    }
  }
  return finaloutput.toString();
}
console.log(findNonrepeatingCharacter("abbcc"));

//using map

nonrep = (s) => {
  const map = new Map();
  const result = [];

  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (let [key, val] of map) {
    if (val === 1) {
      result.push(key);
    }
  }
  return result.toString();
};

console.log(nonrep("zaabbc"));
