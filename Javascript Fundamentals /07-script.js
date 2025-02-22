let a = 4;
let b = 3;
//Arithematic operators

console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b);// exponential

//increment and decrement operators

console.log("a++ =", a++); // first print then increment 4
console.log("current value of a =", a);
console.log("++a =", ++a); // first increment then print 6
console.log("current value of a =", a);
console.log("a-- =", a--); // first print then decrement  6
console.log("current value of a =", a);
console.log("--a =", --a); // first decrement then print 4
console.log("current value of a =", a);

//Assignment operators

a += 4; //a = a + 4
console.log("a =", a);

a -= 4; //a = a - 4
console.log("a =", a);

a *= 4; //a = a * 4
console.log("a =", a);

a /= 4; //a = a / 4
console.log("a =", a);

a **= 4; //a = a ** 4
console.log("a =", a);

a %= 4; //a = a % 4
console.log("a =", a);

//Comparision operator
 
let x = 6;
let y = 4;
let z = "4";


console.log("x===y", x===y); // strict equality - check value and data type of  operand
console.log("y==z", y==z); // loose  equality - check only value  operand

console.log("x!==y", x!==y); // strict inequality - check value and data type of  operand
console.log("y!=z", y!=z); // loose inequality - check only  value  operand

console.log("x<y", x<y);
console.log("x>y", x>y);
console.log("x<=y", x<=y);
console.log("x>=y", x>=y);

// Logical operators

let p = 4;
let q = 5;

console.log("cond1 && Cond2=",p<q && q === 15); // and operator gives true only if both condition is true
console.log("cond1 || cond2 =", p>q || q=== 5); // or operator gives true if any one condition is true
console.log("!(p<q) =", !(p<q)); // not operator makes true <------> false












