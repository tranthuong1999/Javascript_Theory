/*
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

console.log(generator.next());
// { value: 1, done: false }

console.log(generator.next());
// { value: 2, done: false }

console.log(generator.next());
// { value: 3, done: true }
*/

/*
function* test() {
    console.log("A");
    yield 1;
}

const generator = test();

console.log("B");
*/


/*
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

for (let value of generator) {
    console.log(value);
}
*/


/*
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

console.log(str);
*/

/*
function* gen() {
    let ask1 = yield "2 + 2 = ?";

    alert(ask1); // 4

    let ask2 = yield "3 * 3 = ?"

    alert(ask2); // 9
}

let generator = gen();

alert(generator.next().value);    // "2 + 2 = ?"

alert(generator.next(4).value);   // "3 * 3 = ?"

alert(generator.next(9).done);    // true
*/

/*
function* test() {
    let result = yield 10;
    console.log(result);
}

const gen = test();

gen.next();
gen.next();
*/

/*
function* test() {
    let result = yield 10;
    return result;
}

const gen = test();

console.log(gen.next(100));
console.log(gen.next(200));
*/



function* test() {
    let a = yield 10;
    let b = yield 20;

    return a + b;
}

const gen = test();

console.log(gen.next());
console.log(gen.next(3));
console.log(gen.next(7));