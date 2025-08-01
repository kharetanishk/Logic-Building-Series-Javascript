// //print even numbers from 2 to 10
// //use when you know the number of iterations
// for (let i = 0; i <= 10; i += 2) {
//   // console.log(i);
// }

// //while loop
// //use when you donnt know the number of itereations

// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// // do while loop
// // use when you want to run the logic atleaast once

// let num = 0;
// // do {
// //   console.log("AT LEAST ONCE");
// // } while (num < 5);

// let num1 = 1;
// while (num1 <= 100) {
//   num1 = num1 * 2;
// }
// console.log(num1);

// //for of looops used best for array or strings , best case to find values without indexing
// let fruits = ["banana", "apple", "pineapple", "strawberry"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// //banana
// // apple;
// // pineapple;
// // strawberry;

// //for in do it for keys not the object values to do it for object values use for of
// const obj = {
//   name: "tanishk",
//   age: 21,
// };

// for (let key in obj) {
//   console.log(`${key} is key for ${obj[key]}`);
// }
// //output -
// // name is key for tanishk
// // age is key for 21

// //forEach -  it is a more functional way to loop over array elemetns without brreaking it
// //no early exit possible

// const arraydemo = [12, 2, 3232, 323, 12, 534, 66];

// arraydemo.forEach((num, idx) => {
//   console.log(`${num} has this index - ${idx}`);
// });

// //--output
// //12 has this index - 0
// //2 has this index - 1
// // 3232 has this index - 2
// // 323 has this index - 3
// // 12 has this index - 4
// // 534 has this index - 5
// // 66 has this index - 6

// //Use for...of to loop through "loopmaster" and print each character.

// const word = "loopmaster";
// for (let letter of word) {
//   console.log(letter);
// }

// //Use for...in to loop through this object:
// const laptop = { brand: "HP", ram: "16GB", ssd: "1TB" };

// for (let key in laptop) {
//   console.log(`${key} of ${laptop[key]}`);
// }

// // Problem 1: Sum of Even Numbers in an Array

// const arr = [5, 12, 8, 3, 17, 6];
// const evenNum = [];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenNum.push(arr[i]);
//   }
// }
// evenNum.forEach((x) => {
//   sum += x;
// });
// console.log(sum);

// ///or

// for (let num of arr) {
//   if (num % 2 === 0) {
//     num += sum;
//   }
// }
// console.log(sum);

// //Problem 2: Count vowels in a string
// const input = "javascript is power";
// const vowels = ["a", "e", "i", "o", "u"];
// let count1 = 0;

// for (letter of input) {
//   vowels.forEach((vowel) => {
//     if (letter === vowel) {
//       count1++;
//     }
//   });
// }
// console.log(count1);

//nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

//break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip 3
  console.log(i);
}
//continue means skip that particular entity and continue looping

for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Stop loop at 3
  console.log(i);
}
//breaks the loop where the entity gets equal to 3

//challenge
//Use a nested loop to print a pattern like:
// *
// * *
// * * *
// * * * *

for (let i = 1; i <= 4; i++) {
  let line = ""; // create empty string to build the row
  for (let j = 1; j <= i; j++) {
    line += "*  ";
  }
  console.log(line); //because of this console it shift to a new line
}

//challenge 2 Use break to stop a loop once you hit a number divisible by 7
// in [3, 6, 14, 8, 21, 9].

const arr2 = [3, 6, 14, 8, 21, 9];
for (let val of arr2) {
  if (val % 7 == 0) {
    break;
  } else {
    console.log("loops run upto" + " " + val);
  }
}

//Mini Project: Frequency Counter
//Use a loop to count how many times each letter occurs
// Store in an object (like a dictionary)

const word = "mississippi";

let obj = {};
for (let x of word) {
  obj[x] = (obj[x] || 0) + 1;
}
console.log(obj);

// console.log(JSON.stringify(data));

//array

const things = ["bat ", "ball", "laptop", "pencil"];

function callingThings(things) {
  for (let thing of things) {
    console.log(thing);
  }
}

callingThings(things);
