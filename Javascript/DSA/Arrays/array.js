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
