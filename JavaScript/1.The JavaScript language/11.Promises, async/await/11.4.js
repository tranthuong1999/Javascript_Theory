/*
new Promise((resolve, reject) => {
    resolve(10);
})
    .then(value => {
        console.log("A:", value);
        return value + 5;
    })
    .then(value => {
        console.log("B:", value);
        throw new TypeError("Invalid data");
    })
    .catch(error => {
        console.log("C:", error.name);
        return 5;
    })
    .then(value => {
        console.log("D:", value);
    });
*/



// window.addEventListener("unhandledrejection", event => {
//     console.log("GLOBAL:", event.reason.message);
// });

// Promise.reject(new Error("API failed"))
//     .then(value => {
//         console.log("SUCCESS:", value);
//     });


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         throw new Error("Whoops!");
//     }, 1000);
// }).catch(alert);



new Promise((resolve, reject) => {
    setTimeout(() => {
        throw (new Error("Whoops!"));
    }, 1000);
}).catch(error => {
    console.log(error.message);
});