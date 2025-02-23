// String -  string is a sequence of characters used to represent text
let str = "Devlopment";

// string comes with some inbuilt properties and functions(methods)

//string length - str.length
//console.log(str.length); // or str["length"]
console.log(`length of string is ${str.length}`);

// string indices - each character in a string has their own position (index) starting from 0

//accessing individual character through index
for(let i=0; i<(str.length); i++) {

    //console.log("index",[i],"=",str[i]);
    let output= (`index ${i} = ${str[i]}`);
    console.log(output);
}

// Template literal - A way to have embedded expression or variable in string
// string interpolation - A way to insert variable or expressions directly into string.

let student = {
    Name : "Rohit",
    class : 10,
    isPass : true,
};

let result = `${student.Name} is in class ${student.class} has passed is boards: ${student.isPass}`;
console.log(result);

// escape character

let title = "Prin\tcipal"; 
console.log(title.length); // escape character is counted as one character title.length = 10

//string methods -These are inbuilt functions to manipulate a string
 let string = "Hello World";
 let string2 = "People";
 console.log(string);

//Upercase
let newString = string.toUpperCase();
console.log(newString);

//Lowercase
console.log(string.toLowerCase());

//trim -remove white space
console.log(string.trim()); 

//slice- str.slice(startindex, endindex) - return part of string - end index in not included
console.log(string.slice(2,7))

//concat - join two strings
console.log(string2.concat(string)); // console.log(string + string2);

//replace method- str.replace(searchval, newval)        str.replaceAll() - it ensure replacement and every position 
console.log(string.replace("World", "Universe"));
console.log(string2.replace("Peo", "ap"));

//charAT - str.charAT(index)
console.log(string2.charAt(5));