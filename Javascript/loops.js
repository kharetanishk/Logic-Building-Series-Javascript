//print even numbers from 2 to 10
//use when you know the number of iterations
for (let i = 0; i <= 10; i += 2) {
  // console.log(i);
}

//while loop
//use when you donnt know the number of itereations

let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do while loop
// use when you want to run the logic atleaast once

let num = 0;
// do {
//   console.log("AT LEAST ONCE");
// } while (num < 5);

let num1 = 1;
while (num1 <= 100) {
  num1 = num1 * 2;
}
console.log(num1);

//for of looops used best for array or strings , best case to find values without indexing
let fruits = ["banana", "apple", "pineapple", "strawberry"];
for (let fruit of fruits) {
  console.log(fruit);
}
//banana
// apple;
// pineapple;
// strawberry;

//for in do it for keys not the object values to do it for object values use for of
const obj = {
  name: "tanishk",
  age: 21,
};

for (let key in obj) {
  console.log(`${key} is key for ${obj[key]}`);
}
//output -
// name is key for tanishk
// age is key for 21

//forEach -  it is a more functional way to loop over array elemetns without brreaking it
//no early exit possible

const arraydemo = [12, 2, 3232, 323, 12, 534, 66];

arraydemo.forEach((num, idx) => {
  console.log(`${num} has this index - ${idx}`);
});

//--output
//12 has this index - 0
//2 has this index - 1
// 3232 has this index - 2
// 323 has this index - 3
// 12 has this index - 4
// 534 has this index - 5
// 66 has this index - 6
