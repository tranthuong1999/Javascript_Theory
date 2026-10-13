/*
function showArguments() {
    console.log(arguments[0]); // 10
    console.log(arguments[1]); // 20
    console.log(arguments[2]); // 30
    console.log(arguments.length)
}

showArguments(10, 20, 30);
*/


/*
function test(a, b) {
    console.log(arguments.length);
    console.log(arguments[2]);
    console.log(arguments.map);
}

test(10, 20, 30);
*/

/*
function test() {
    const arr = Array.from(arguments);
    console.log(arr);
}

test(10, 20, 30);
*/


/*
const user1 = {
    name: "Martin",
    skills: ["JavaScript", "React"]
};

const user2 = { ...user1 };

user2.name = "John";
user2.skills.push("Next.js");

console.log(user1);
console.log(user2);
*/

let arr = ["HTML", "JavaScript", "CSS"];

let sort = [...arr].sort((a, b) => a > b);

console.log(sort)
console.log(arr)