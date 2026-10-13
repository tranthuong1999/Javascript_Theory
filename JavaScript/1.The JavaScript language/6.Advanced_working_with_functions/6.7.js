/*
const sayHi = new Function('console.log("Hello")');

sayHi(); // Hello
*/

/*
function getFunc() {
    let value = "Hello";

    const func = new Function(
        'console.log(value)'
    );

    return func;
}

const sayHi = getFunc();

sayHi();
*/


// let x = 10;

// function test() {
//     let y = 20;

//     return new Function(
//         console.log(x)
//         // 'return x + y'
//     );
// }

// const fn = test();

// console.log(fn());


globalThis.x = 10;

function test() {
    let y = 20;

    return new Function(
        'y',
        'return x + y'
    );
}

const fn = test();

console.log(fn(5));