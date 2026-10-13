/*
function sayHi() {
    console.log("Hello");
}

sayHi();
console.log("World");
*/



/*
function test() {
    console.log("Test");
    return function () {
        console.log("Callback");
    };
}

setTimeout(test(), 1000);

console.log("End");
*/

// test => end => callback(sau 1s)


/*
let timerId = setTimeout(() => {
    console.log("Hello!");
});

clearTimeout(timerId);

console.log("Timer cancelled");
*/

/*
let timerId = setTimeout(() => {
    console.log("A");
}, 2000);

clearTimeout(timerId);

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
*/

/*
let count = 0;

let timerId = setInterval(() => {
    console.log(count);

    if (count === 5) {
        clearInterval(timerId);
    }

    count++;
}, 1000);
*/

/*
let count = 0;

let timerId = setInterval(() => {
    count++;
    console.log(count);
    if (count === 5) {
        clearInterval(timerId)
    }
}, 1000)
*/
/*
function sayHi() {
    console.log("hello")
}


setTimeout(sayHi, 0);

console.log("World");
*/

/*
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");
*/

/*
function createTimer() {
    let user = {
        name: "Martin",
        age: 27
    };

    setInterval(() => {
        console.log(user.name);
    }, 1000);
}

createTimer();
*/

/*
function createTimer() {
    let user = {
        name: "Martin"
    };

    let timerId = setInterval(() => {
        console.log(user.name);
    }, 1000);

    return timerId;
}

const timerId = createTimer();

// Khi không cần timer nữa
// clearInterval(timerId);
*/
// function printNumbers(from, to) {

//     let timerId = setInterval(() => {
//         console.log(from);
//         if (from >= to) {
//             clearInterval(timerId);
//             return;
//         }
//         from++;

//     }, 1000)

// }


/*
function printNumbers(from, to) {

    function run() {
        console.log(from)

        if (from < to) {
            from++;
            setTimeout(run, 1000)
        }

    }

    setTimeout(run, 1000)
}
printNumbers(5, 10);
*/


// Task 2: What will setTimeout show?



/*
let i = 0;

setTimeout(() => console.log(i), 100);

// Giả sử vòng lặp mất hơn 100ms để chạy
for (let j = 0; j < 100000000; j++) {
    i++;
}
*/



