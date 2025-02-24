// Array - its is a linear way store same type of data together
let marks = [97, 82, 45, 72, 100, 48];

console.log(marks);
// length of array
console.log(marks.length);
console.log(typeof marks); // array acts as an  object

// accessing each value through index -- looping through array
for (let i = 0; i < (marks.length); i++) {
    let output = `The value at index ${i}: ${marks[i]}`;
    console.log(output);
}

// change value in array through index
console.log(marks[2]); // orignal marks at index 2
marks[2] = 65; // updating marks at index 2
console.log(marks[2]); // printing updated marks at index 2
console.log(marks);

// other way to loop over array

let cities = ["Patna", "Ranchi", "Roulkela", "Jamshedpur", "Bhopal", "Delhi"];

for (let city of cities) {
    console.log(`city name is ${city.toUpperCase()}`); // print city names in uppercase
}

// Array methods
let food = ["apple", "burger", "chips", "kiwi"];
let salary = [1000, 2000, 3000, 4000, 5000];
let town = ["jama", "lumo", "kuma"];
let cgpa = [7.6, 8.4, 9.5, 6.2, 9.8, 8.8 ]

// push - add to end
food.push("orange", "tomato"); // adding item in an array at the end
console.log(food);


//pop - Delete last item from end and return
let deleted = food.pop(); // delete the last item from array
console.log(food);
console.log(`Deleted item is ${deleted}`); // print the deleted item


// tostring - convert array to string
console.log(food.toString()); // array got converted into string
console.log(food); // tostring method doesn't change the orignal array
console.log(salary.toString());
console.log(salary);


// concat - join multiple array
// can add multipe array - array1.concat(array2,array3);

let connect = food.concat(town); // orignal array won't be changed
console.log(connect);
console.log(food.concat(cities, town));


// unshift - add to start (similar to push method)
salary.unshift(5000);
console.log(salary);


// shift method - delete from starting and return
town.shift();
console.log(town);
console.log(`deleted town name is ${town.shift()}`);


//slice -  return a piece of the array
console.log(salary);
console.log(salary.slice(0, 4)); // don't change orignal array  -- ending index is not included
console.log(salary.slice(1)); // print from selected index to last index
console.log(salary.slice()); // copy the orignal array


//splice - change in orignal array(strtidx, delcount, newelem) (add, remove, replace)
console.log(cgpa);
cgpa.splice(1, 2, 10 ,10); // remove and replace
console.log(cgpa);
cgpa.splice(3,2 );  // only remove 
console.log(cgpa);
cgpa.splice(3, 0 , 4.5); // will add 4.5 before the starting index
console.log(cgpa);







