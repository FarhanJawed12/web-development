//conditional statements 

//if statement

let age = 12;

if (age >= 18) {
    console.log("YOu can vote");
}

if (age < 18) {
    console.log("You can't vote");
}



//if else statement 

let num = 23;

if (num%2 === 0) {
    console.log(num,"isEven number");
}
else {
    console.log(num,"isOdd number");
}

//else-if statement

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
 else if (mode === "blue") {
    color = "blue";
}
else {
    color = "white";
}
console.log(color);

//Ternary operators- conditon?true output:false output

let a  = 100;

let result = (a%2 === 1)?"odd no":"even no";

console.log(result);
 