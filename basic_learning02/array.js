// array
// This part is directly taken form sir notes
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //output : [1,2] //  slice doesnot include the last index
// const myn3 =  myArr.splice(1,3) // output :[1,2,3]

console.log(myn1);
// console.log(myn3);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // splice include last index remove those element from the original array
console.log(myn2);