
/*
let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor);
*/

/*
let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    writable: false
});

user.name = "Martin";

console.log(user.name); // John
*/

/*
let user = {
    name: "John",
    age: 25
};

Object.defineProperty(user, "secret", {
    value: "123456",
    enumerable: false
});

console.log(Object.keys(user));
console.log("secret" in user);
console.log(Object.getOwnPropertyNames(user));
*/

/*
let user = {};

Object.defineProperty(user, "secret", {
    value: "123",
    enumerable: false
});

let descriptors = Object.getOwnPropertyDescriptors(user);

console.log(descriptors.secret);
*/

/*
let user = {
    name: "John"
};

Object.preventExtensions(user);

user.name = "Martin";
// user.age = 25;

console.log(user.name);
// console.log(user.age);
*/



let account = {
    username: "martin"
};

Object.defineProperty(account, "password", {
    value: "abc123",
});

console.log(Object.keys(account));
console.log(account.password);