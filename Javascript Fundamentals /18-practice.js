/*Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end*/

let bussiness = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]; 

//removing 1st company name
bussiness.shift();  // ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

//remove uber and add ola
bussiness.splice(1, 1 , "Ola"); // ["Microsoft", "Ola", "Google", "IBM", "Netflix"]
]

// add amazon at the end
bussiness.push("Amazon");

console.log(bussiness);