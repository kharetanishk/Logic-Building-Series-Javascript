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
console.log(twoSum(ar, tr));

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
console.log(summing(array, target));

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

const numbers = [1, 3, 2, 4, 9, 1];
console.log(countarray(numbers));

// const set = new Set([1, 1, 2, 3, 4, 1, 2]);
// console.log(set);

//same logic using sets

function findDuplicate(array) {
  const set = new Set();

  for (let num of array) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

console.log(findDuplicate(numbers));
