// Loops - are used to execute a piece of code again and again
// calulate sum of 1st n number
let n = 100;
let sum = 0;

// for loop - initialization; condition; updation
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("sum is", sum); 

// while loop
// initialization
// while(condition) {
// do some work
// updation
// }

// sum of 1st  n even natural number

let evenNum = 10;
let totalNum = 2*evenNum; // first 10 even number is in first 20 natural number
let total = 0;
let j = 2;
while (j <= totalNum) {
    total = total + j;
    j += 2;
}
console.log("sum is",total);

// for of loop -- with for of loop we can itrate over string , arrays

let str = "Kapil";
let size = 0;
for(let count of str) {
    console.log("count is",count);
    size++;
}
console.log("size of string:",size);

// for in loop -- itrate over objects

const student = {
    tittle : "Ironman",
    roll: 60,
    cgpa : 7.5,
    isPass : true,
};

for(const key in student) {
    console.log(key,":",student[key]);
}