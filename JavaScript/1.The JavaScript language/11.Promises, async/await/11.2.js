/*
const promise = new Promise((resolve, reject) => {
    console.log("Executor");
});
console.log("After Promise");
*/


/*
const promise = new Promise((resolve, reject) => {
    console.log("Start");

    reject(new Error("Failed"));

    console.log("End");
});
*/

/*
const promise = new Promise((resolve, reject) => {
    console.log("Start");

    resolve("Success");

    console.log("End");
});
*/

/*
const promise = new Promise((resolve, reject) => {
    reject("Failed");
});

promise.then(
    result => console.log("A:", result),
    error => console.log("B:", error)
);

promise.catch(error => {
    console.log("C:", error);
});
*/

/*
Promise.resolve("Success")
    .then(result => {
        console.log(result);
    }).finally(() => {
        console.log("Cleanup");
    })
*/


/*
const promise = Promise.resolve("A");

promise.then(result => {
    console.log(result);
});

console.log("B");

promise.then(result => {
    console.log(result + "C");
});
*/

/*
let promise = new Promise(function (resolve, reject) {

    setTimeout(() => resolve(2), 1000);
    resolve(1);

});
promise.then((result) => {
    console.log("result", result)
});
*/



function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
delay(3000).then((value) => {
    console.log("result", value)
})