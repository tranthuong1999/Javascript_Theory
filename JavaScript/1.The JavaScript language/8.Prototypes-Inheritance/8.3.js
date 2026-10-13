/*
let obj = {};

console.log(obj.__proto__ === Object.prototype);
// true

console.log(obj.toString === obj.__proto__.toString);
// true

console.log(obj.toString === Object.prototype.toString);
// true
*/

/*
let user = {
    name: "Martin"
};

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString"));
console.log(user.toString === Object.prototype.toString);
*/


/*
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);
// true

console.log(Array.prototype.__proto__ === Object.prototype);
// true
*/

/*
let obj = {
    0: "Hello",
    1: "World",
    length: 2
};
let result = Array.prototype.join.call(obj, ", ");
console.log(result); // Hello, 
*/

/*
let obj = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

let arr = Array.prototype.slice.call(obj);

console.log(arr); // ["b", "c"]
console.log(Array.isArray(arr)); // true

*/

Function.prototype.defer = function (ms) {
    let f = this;
    let context = this;

    return function (...args) {
        console.log('args', args)
        setTimeout(() => {
            f.apply(context, args)
        }, ms)
    }
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // Sau 1 giây: 3




/*
function f() {
    console.log("Hello!");
}
Function.prototype.defer = function (ms) {
    let func = this;
    setTimeout(() => {
        func();
    }, ms)
}

f.defer(5000); // Hiển thị "Hello!" sau 1 giây
*/
