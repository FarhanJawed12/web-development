// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let price = [250, 645, 300, 900, 50]  
console.log("orignal price =",price);
for(let i = 0; i< price.length; i++) { 
   //console.log(`orignal price at index ${[i]} = ${price[i]}`); // orignal price

     price[i] = price[i] - (price[i]/10); // discount price
   // console.log(`discounted price = ${price[i]}`);
}

console.log("Discounted Price =", price);