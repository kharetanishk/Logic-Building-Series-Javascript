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

//Write a function sameElements(arr1, arr2) that returns
// true if both arrays contain the same elements with the same
// frequency, regardless of order.

function sameElements(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const map1 = {};
  const map2 = {};
  const res = [];
  for (let int1 of arr1) {
    map1[int1] = (map1[int1] || 0) + 1;
  }
  for (let int2 of arr2) {
    map2[int2] = (map2[int2] || 0) + 1;
  }

  for (let key in map1) {
    const val1 = map1[key];
    const val2 = map2[key];

    if (val1 !== val2) {
      return false;
    }
  }
  return true;
}

let arr1 = [3, 2, 1];
let arr2 = [1, 2, 3];

console.log(sameElements(arr1, arr2));

// Write a function isAnagram(str1, str2) that returns
// true if both strings contain the same characters with
//  the same frequency, else returns false.

function isAnagram(strng1, strng2) {
  //initially it will check the number of character in each string if not equal then no anagram
  const validString1 = strng1.toLowerCase().replace(/\s+/g, "");
  const validString2 = strng2.toLowerCase().replace(/\s+/g, "");

  console.log(`${validString1} ${validString2}`);

  if (validString1.length !== validString2.length) return false;

  const mappingStr1 = new Map();
  const mappingStr2 = new Map();

  for (const char of validString1) {
    mappingStr1.set(char, (mappingStr1.get(char) || 0) + 1);
  }

  for (const char1 of validString2) {
    mappingStr2.set(char1, (mappingStr2.get(char1) || 0) + 1);
  }

  for (let [key, val] of mappingStr1.entries()) {
    const val1 = mappingStr2.get(key);
    if (val !== val1) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("    ta  nu", "t  an   u   ")); //true
console.log(isAnagram("listen", "listenn")); //false

// Write a function hasPairWithSum(arr, target) that returns true if
//  any two numbers in the array sum up to the target.

function hasPairWithSum(arr, target) {
  arr.sort((a, b) => a - b);

  //these are pointers which will move inside array
  let start = 0; //index -0
  let end = arr.length - 1; //suppose it has index 4

  while (start < end) {
    // 0<4
    const sum = arr[start] + arr[end]; //arr[0] + arr[4] e.g here it is 1+5 = 6 so not equal to target
    if (sum === target) {
      return true;
    } else if (sum < target) {
      //sum is 6 <7 so the array need to move right next is 2 + 5 =7 thus sum === target returns true
      start++;
    } else {
      end--; //suppose if sum was 8 at very first then it needs to move left
    }
  }
  return false;
}
console.log(hasPairWithSum([1, 2, 3, 4, 5], 188));

// Write a function longestWord(sentence) that returns the longest word in a sentence.
//this is my logic
function longestWord(sentence) {
  const sen = sentence.split(" ");
  let arrayOf = [];

  for (let i = 0; i < sen.length; i++) {
    arrayOf.push(sen[i].length);
  }
  const maxLen = Math.max(...arrayOf);

  function filter(arr, value) {
    return arr.filter((s) => s.length === value);
  }

  return filter(sen, maxLen).toString();
}
console.log(longestWord("hello my name is tanishk khare"));

//_________________________
function islonger(sentence) {
  const words = sentence.split(" ");
  const maxLen = Math.max(...words.map((e) => e.length));
  return words.filter((e) => e.length === maxLen).toString();
}

console.log(islonger("hello my name is tanishk khare"));

//___________________\
function islongeset(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(islongeset("hello my name is tanishk khare"));

//Write a function factorial(n) that returns the factorial of a number using recursion.

function factorial(n) {
  //base case
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//Write a function reverseString(str) that returns the reversed string using recursion.

//my logic
function reverseString(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[str.length - 1 - i]);
  }
  return result.join("");
}
console.log(reverseString("tanishk"));

//using recursion

function reverse(str) {
  if (str.length <= 1) return str;
  console.log(str[1] + " " + "ldkajfld");

  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));

//Write a function isPalindrome(str) that returns true if the string is
// a palindrome (same forward and backward), ignoring spaces and case.

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  //its not possible for a pallindrome to have an even length
  if (str.length % 2 === 0) {
    return false;
  }

  const string = str.toLowerCase().replace(/\s+/g, "");

  const middleValue = (string.length + 1) / 2;
  // console.log(middleValue);

  const str1 = string.slice(0, middleValue - 1);
  // console.log(str1);
  const str2 = string.slice(middleValue);
  // console.log(str2);

  const reversedString = str1.split("").reverse().join("");

  if (reversedString === str2) {
    return true;
  }
  return false;
}

console.log(isPalindrome("madam"));

//using recurss=ion

function findPallindrome(string) {
  const clearString = string.replace(/\s+g/, "");

  function checkPallindrome(s) {
    if (s.length <= 1) {
      return true;
    }
    if (s[0] !== s[s.length - 1]) return false;

    return checkPallindrome(s.slice(1, s.length - 1));
  }
  return checkPallindrome(clearString);
}

console.log(findPallindrome("madam"));

// Theme: Two-Pointer Pattern
//Problem 1: hasPairWithSum()
// Write a function hasPairWithSum(arr, target)
// that returns true if any two numbers in a sorted array sum to the target.

function haspairedSUm(arr, target) {
  const sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray);
  let start = 0;
  let end = sortedArray.length - 1;

  while (start < end) {
    const sum = sortedArray[start] + sortedArray[end];

    if (sum === target) {
      return true;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
console.log(haspairedSUm([1, 2, 3, 4, 1], 3));

//Check if all characters in str1 appear in order (not necessarily contiguous) inside str2.\

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  console.log(str2.length);

  while (j < str2.length) {
    //0<19
    console.log(str1[i]);
    console.log(str2[j]);
    if (str1[i] === str2[j]) {
      i++;
      console.log(`${i} console.log i`);
    } else if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hajldfjldelrjeljllo"));

//this file is for pracctice it do contain all the intervieew practice questions
//this file is js based
//.
//

//creating a promise

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("it worked");
  } else {
    reject("something went wrong");
  }
});

promise
  .then((value) => {
    console.log(`RESOLVED : ${value}`);
  })
  .catch((err) => {
    console.log(`REJECTED : ${err}`);
  });

//promise chaining

const firstask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("first task done");
    }, 1000);
  });
};

const secondtask = (msg) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${msg}` + " " + " -> Second task done");
    }, 1000);
  });
};

firstask()
  .then((res1) => {
    console.log(res1);
    return secondtask(res1);
  })
  .then((res2) => {
    console.log(res2);
    return secondtask(res2);
  })
  .catch((error) => {
    console.log(error);
  });
//output
// first task done
// first task done  -> Second task done
