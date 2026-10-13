
/*
function sayHi() {
    console.log("Hello");
}

sayHi.age = 27;

console.log(sayHi.age);
console.log(typeof sayHi);
console.log(typeof sayHi.age);
*/

/*
function sayHi() { }

let sayBye = function () { };

let sayHello = () => { };

console.log(sayHi.name);    // sayHi
console.log(sayBye.name);   // sayBye
console.log(sayHello.name); // sayHello
*/


/*
let user = {
    firstName: "Martin",

    sayHi: function () {
        console.log("Hello");
    }
};

let fn = user.sayHi;

console.log(user.sayHi.name);
console.log(fn.name);
*/


/*
function sum(a, b) {
    return a + b;
}

console.log(sum.length); // 2
*/




/*
function test(a, b, c = 10, d, ...rest) {
    console.log(a, b, c, d, rest);
}

console.log(test.length);
*/



/*
const fn1 = () => { };
const fn2 = (a, b) => { };
const fn3 = (a, b = 10) => { };

console.log(fn1.length);
console.log(fn2.length);
console.log(fn3.length);
*/

/*
function counter() {
    return counter.count++;
}

counter.count = 5;

console.log(counter())
console.log(counter())
console.log(counter())
*/


/*
let sayHi = function greet() {
    console.log("Hello");
    console.log(greet.name)
}
sayHi();
*/

/*
let sayHi = function greet(name) {
    if (name) {
        console.log("hello", name)
    } else {
        greet("Martin")
    }
}
sayHi();
*/


// let sayHi = function () {
//     console.log("Hello");
//     sayHi();
// };

/*
let sayHi = function greet() {
    console.log("Hello");
    greet();
};

let welcome = sayHi;

sayHi = null;

welcome();
*/

/*
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }
    counter.set = function (number) {
        count = number;
    }
    counter.decrease = function () {
        return count--;
    }

    return counter;
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10);

alert(counter()); // 10

counter.decrease();

alert(counter()); // 10
*/


// function outer(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(outer(1)(2))

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }
    f.valueOf = function () {
        return currentSum;
    }
    return f;
}

// console.log(sum(1)(2) == 3); // true
// console.log(sum(1)(2)(3) == 6); // true
console.log(sum.name);
console.log(sum.length);



/*
let obj = {
    valueOf() {
        console.log("valueOf called");
        return 10;
    },

    toString() {
        console.log("toString called");
        return "Hello";
    }
};

console.log(String(obj) + " Martin");
*/

