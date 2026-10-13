// console.log(globalThis === window); // true


// var user = "Martin";

// console.log(global.user); // Martin
// console.log(globalThis.user); // Martin

/*
var a = 10;
let b = 20;
const c = 30;

console.log(globalThis.a);
console.log(globalThis.b);
console.log(globalThis.c);
*/



globalThis.user = "Martin";

console.log(user);            // Martin
console.log(globalThis.user); // Martin