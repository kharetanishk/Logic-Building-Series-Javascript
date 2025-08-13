//Problem 1: Two Sum
//Description:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input has exactly one solution,
// and you may not use the same element twice.

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}
const ar = [5, 2, 1, 6];
const tr = 3;
// console.log(twoSum(ar, tr));

//again
function summing(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}

const array = [6, 1, 3, 5];
const target = 9;
// console.log(summing(array, target));

//Problem 2
//Given an array of integers, return true if any value appears at
// least twice in the array, and false if every element is distinct.

function countarray(arr) {
  const obj = {};

  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  for (let num in obj) {
    if (obj[num] >= 2) {
      return true;
    }
  }
  return false;
}

// const numbers = [1, 3, 2, 4, 9, 1];
// console.log(countarray(numbers));

//same logic using sets

function findDuplicate(array) {
  const set = new Set();

  for (let num of array) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

// console.log(findDuplicate(numbers));

//roblem 3: Valid Anagram
// Description:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map1 = {};
  const map2 = {};

  for (let letter of s) {
    map1[letter] = (map1[letter] || 0) + 1;
  }

  for (let letter of t) {
    map2[letter] = (map2[letter] || 0) + 1;
  }

  console.log(map1, map2);

  for (let key in map1) {
    console.log(map1[key], map2[key]);
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
}
// console.log(validAnagram("anut", "tanu"));

//Problem 4: Group Anagrams
// Description:
// Given an array of strings, group the anagrams together.
//  You can return the answer in any order.
function groupAnagrams(strs) {
  const map = {};

  for (let word of strs) {
    const sorted = word.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(word);
  }

  return Object.values(map);
}

// console.log(groupAnagrams(["tea", "ate"]));

// Problem 5 – Top K Frequent Elements
// Difficulty: Medium
// Topic: Hash Map + Sorting / Bucket Sort

// Description
// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

function mostfrequentElement(strOfNum) {
  //step -1 count the frequency and map the frequency
  const map = {};
  for (let num of strOfNum) {
    map[num] = (map[num] || 0) + 1;
  }

  //step-2 push the key-value pair inside an array so that we can sort and more..
  const bucket = [];
  for (let key in map) {
    bucket.push([key, map[key]]);
  }

  //step-3 sorting the values in descending order
  bucket.sort((a, b) => b[1] - a[1]);

  //step-4 slice the first two most frequent elements which we consider k
  // here and return the keys or the real values

  const k = 2;
  const result = bucket.slice(0, k).map((item) => Number(item[0]));
  return result;
}

console.log(mostfrequentElement([1, 2, 2, 3, 3, 4]));
