// singleton
// Object.create (constructor(1st type) method of object decleration)

// object literals (2nd type)

const mySym = Symbol("key1") // singlton (a type of premitive data type in js) defined.  


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // singlton act as a key 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
 // Method 1 of accessing objects in js using dot(.)
// console.log(JsUser.email)

// Method 2 of accessing object in js using square([])
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // printing singltion using square method of acessing object in js

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());