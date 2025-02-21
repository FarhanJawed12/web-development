// var, let and const

{ // 1st block of code
let age = 24;   // update is possible
age = 48;

console.log(age);

const pi = 3.14; // update is not possibe and initialization in mandatory

console.log(pi);
} // end of  1st block of code
{  // 2nd block of code
    let age = 36;
    console.log(age);

    const pi = 3.146;
    console.log(pi);
}

//var - variable can be re-declared and updated. A global scope variable
//let - variable can't be re-declared but can be updated. A block scope variable
//const - variable can't be re-declared or updated . A block scope variable