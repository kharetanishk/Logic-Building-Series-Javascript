//Problem 1: Two Sum
//Description:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input has exactly one solution,
// and you may not use the same element twice.
function twoSum(nums, target) {
  const map = {}; // value: index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);
    console.log(`this is the value of num[i] ${nums[i]}`);

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum([2, 3, 1, 5], 6));
