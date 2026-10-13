// const bigNumber = 10n;
// const normalNumber = 5n;

// console.log(bigNumber + normalNumber); // TypeError

// let selectedUser;

// console.log(selectedUser); // null

// const id1 = Symbol("id");
// const id2 = Symbol("id");

// console.log(id1 === id2); // false
// console.log(typeof id1);  // "symbol"

// function sayHello() { }

// console.log(typeof sayHello); // "function"

// const value = null;

// console.log(value === null); // true

// console.log(Number(undefined))
// console.log(Number(null))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(''))
// console.log(Number('123'))
// console.log(Number("123z"))
// console.log(Number(" "))

// 2.9.comparision
console.log("6" / "2")
console.log("a".codePointAt(0)); // 97
console.log("p".codePointAt(0)); // 112
console.log("A".codePointAt(0)); // 112
console.log("w".codePointAt(0)); // 112
console.log("e".codePointAt(0)); // 112
// 

// let count = 10;

// do {
//     console.log(count);
//     count++;
// } while (count < 5);

// console.log(count);

// let i = 0;

// while (i < 5) {
//     if (i === 2) continue;
//     console.log(i);
//     i++;
// }

function test() {
    return;
    console.log("Hello");
}

console.log(test());

function min(a, b) {
    if (a === b) return a;

    return a - b > 0 ? b : a;
}
console.log(min(2, 5))
console.log(min(3, -1))
console.log(min(2, 2))

// Phần 1 — Tự viết hàm tính lũy thừa

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(2, 0)); // 1


console.log(add(2, 3));

function add(a, b) {
    return a + b;
}

// const multiply = function (a, b) {
//     return a * b;
// };

// console.log(multiply(2, 3));

// const double = (n) => {
//     return n * 2;
// }
// console.log(double(5));

// const triple = (number) => number * 3
// const getMessage = () => "Welcome"




for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }

    if (i === 4) {
        break;
    }

    console.log(i);
}

function multiply(a, b) {
    console.log(a * b);
}

function add(a, b) {
    return a + b;
}

let x = multiply(2, 4);
let y = add(2, 4);

console.log(x);
console.log(y);