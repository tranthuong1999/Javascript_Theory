// Promise.resolve(2)
//     .then(value => {
//         console.log(value);
//         return value * 3;
//     })
//     .then(value => {
//         console.log(value);
//         return value * 5;
//     });

// Promise.resolve(2).then(value => {
//     console.log(value * 5);
// });

let promise = Promise.resolve(10);

function f1(value) {
    console.log("f1:", value);
    throw new Error("Something went wrong");
}

function f2(error) {
    console.log("f2:", error.message);
}

promise
    .then(f1)
    .catch(f2);