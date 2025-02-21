// Data types
// Primitive data type - Number, string, boolen, undifined, null, bigint, symbol

let fullName = "Iron man";
let cgpa = 8.2;
let isPass = true;
let address = null; // is an object but treated as primitive, null is absence of data
let x;
let y = BigInt("12345678");
let z = Symbol("Hello!");
console.log(typeof fullName); // string
console.log(typeof cgpa); // number
console.log(typeof isPass); // boolen
console.log(typeof address);// null(object)
console.log(typeof x); // undefined
console.log(typeof y); // bigint
console.log(typeof z); // symbol

// Non-Primitive data type - Objects Functions
// objects
const employee ={
// key  :  value
   name: "Monty",
   role : "webDevloper",
   salary: 100000,
   isActive: true,
};
console.log(typeof employee);
console.log(employee.name) // accessing one key(name) of object
console.log(employee ["role"]);  // accessing one key(role) of object

employee["name"]  = "Rahul"; // updating value in name key

console.log(employee.name);

employee["salary"] = employee["salary"] + 100000 // updating value in salary key
console.log(employee.salary);