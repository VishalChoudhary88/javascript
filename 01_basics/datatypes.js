// # primitive 

//  7 types: string ,number ,boolean, null, undefined,symbol, BigInt

// const score = 100
// const scoreValue = 100.1

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = symbol('123')

// console.log(id===anotherId);

//  const bigNumber=4625456742653n

// reference (non primitive):

// array,objects,functions,
// const heros = ["choudhary", "kumar", "koundal"]
// let myObj = {
//     name: "vishal"
//     age: 24,
// }

// const myFunction = function () {
//     console.log("hello world");

// }
// console.log(typeof anotherId);
// =================================================



//  stack (primitive),Heap (Non-primitivel)


let myYoutubename = "vishal"

let anothername = myYoutubename
anothername = "choudharyji"

console.log(myYoutubename);

console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybi"
}

let userTwo = userOne


userTwo.email = "vishal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
