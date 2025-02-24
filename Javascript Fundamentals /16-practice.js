// For a given array with marks of student [85, 97, 44, 37,76, 60]. Find the average of the entire class

let marks = [85, 97, 44, 37, 76, 60];

let total = 0;

for (let im of marks) { // im -- is individual marks

    total = total + im; // total sum of all marks
}
console.log(`total marks of entire class = ${total}`);  // total marks

console.log(`total students in entire class = ${marks.length}`); // total student

let avg = (total) / (marks.length); // avg of all marks

console.log(`Average marks of entire class = ${avg}`);