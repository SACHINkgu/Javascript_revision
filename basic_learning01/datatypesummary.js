//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n






const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Notes:

// data types of all values
// function - return function
// string  - return string 
// null - return object 
// object - return object 
// array - return object 
// bigint - return undefined
// number - return number
// Boolean - return Boolean 
// symbol - return symbol

// Stack and heap storage 
//  Primitive -> 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt => uses stack

// Reference (Non primitive)-> Array, Objects, Functions => heap .
