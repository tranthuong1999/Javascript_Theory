/*
try {
    console.log("A");

    let x = undefinedVariable;

    console.log("B");
} catch (err) {
    console.log("C");
}

console.log("D");
*/
/*
try {
    setTimeout(() => {
        throw new Error("Something went wrong");
    }, 1000);
} catch (err) {
    console.log("Caught:", err.message);
}
*/

/*
setTimeout(() => {

    try {
        throw new Error("Something wrong")
    } catch (error) {
        console.log(error.message)
    }


}, 1000)
*/

/*
try {
    JSON.parse("{ invalid json }");
} catch (err) {
    console.log(typeof err);
}

try {
    let age = 23.9;
    age.toFixed(2);
} catch (err) {
    console.log(err.name);
}
*/

/*
try {
    JSON.parse("{ invalid json }");
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}
*/
/*
function test() {
    console.log("A");

    throw new Error("Failed");

    console.log("B");
}

try {
    test();
} catch (err) {
    console.log(err.message);
}

console.log("C");
*/

/*
try {
    const user = JSON.parse('{"name": "Martin"}');

    console.log(user.name);

    unknownFunction();
} catch (err) {
    console.log("User data is invalid");
}
*/

// try {
//     throw new Error("Failed");
// } finally {
//     console.log("Cleanup");
// }

/*
function test() {
    try {
        console.log("Try");
        return "Success";
    } finally {
        console.log("Finally");
    }
}

console.log(test());
*/



function test() {
    try {
        return "A";
    } finally {
        console.log("B");
    }
}

console.log(test());