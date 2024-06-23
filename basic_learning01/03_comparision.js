// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  //1:32:37 
console.log(null == 0); //checks only value
console.log(null >= 0); // here in this , null is converted in 0

console.log(undefined == 0);
console.log(undefined > 0);  //undefined gives false in each of these case.
console.log(undefined < 0);
// avoid these type of comparision bez they create confusion .

// ===  strictly check (value and datatype)

console.log("2" === 2);