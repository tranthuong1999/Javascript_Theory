/*
function outer() {
    let message = "Hello";

    function inner() {
        let name = "Martin";
        console.log(message, name);
    }

    inner();

    console.log(message);
}

outer();
*/


/*
function sayHello() {
    console.log("Hello");
}

function outer() {
    sayHello();

    function sayHello() {
        console.log("Hi");
    }
}

outer();
*/


/*
let name = "Global";

function outer() {
    let name = "Outer";

    function inner() {
        console.log(name);
    }

    return inner;
}

let fn = outer();

fn();
*/


/*
function createUser() {
    let name = "Martin";

    return function () {
        name = "John";
        console.log(name);
    };
}

const user = createUser();

user();

*/


/*
let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}
name = "Pete";
sayHi();
*/


/*
function makeCounter() {
    let counter = 0;
    return {
        up() {
            return ++counter;
        },
        down() {
            return --counter;
        }
    }
}



let counter = makeCounter();

counter.up();
counter.up();

console.log(counter.down()); // 1
console.log(counter.down()); // 0
*/

/*
let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}
sayHi();
*/

/*
function sum(a) {
    return function (b) {
        return a + b;
    }
}


console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
*/


/*
let x = 1;

function func() {
    console.log(x);
    let x = 2;
}

func();
*/


/*
function inBetween(a, b) {
    return function (item) {
        return item >= a && item <= b;
    }

}

function inArray(arr) {
    return function (item) {
        return arr.includes(item)
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
// [3, 4, 5, 6]

console.log(arr.filter(inArray([1, 2, 10])));
// [1, 2]
*/


function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();


army[0](); // 0
army[1](); // 1
army[2](); // 2
army[3](); // 3

/*
1. Vấn đề nằm ở var
Với var, biến có function scope, không có block scope nhu let
Điều đó có nghĩa là cả 3 function đều truy cập cùng 1 biến i thuộc môi trường makeArmy()

2. Điều gì xảy ra khi vòng lặp kết thúc?
Vòng lặp chạy:
| Lần lặp | Giá trị `i` |
|---|---|
| Lần 1 | 0 |
| Lần 2 | 1 |
| Lần 3 | 2 |
| Kết thúc | 3 |
Lưu ý : Điều kiện i < 3 được kiểm tra lại sau khi i tăng nên 3 . Khi đó điều kiện sai và vòng lặp kết thúc.
3. Hình dung bằng Lexical Environment

makeArmy() Lexical Environment
│
├── i = 3
│
└── shooters
    ├── shooter[0] ──┐
    ├── shooter[1] ──┼──> Cùng tham chiếu đến i
    └── shooter[2] ──┘

Vòng lặp 1
└── i = 0
    └── shooter[0] ghi nhớ i = 0

Vòng lặp 2
└── i = 1
    └── shooter[1] ghi nhớ i = 1

Vòng lặp 3
└── i = 2
    └── shooter[2] ghi nhớ i = 2
*/

/*
function test() {
    let a = 10;

    if (true) {
        let b = 20;
        console.log(a, b);
    }

    console.log(a);
    // console.log(b);
}

test();
*/
