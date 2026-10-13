/*
const user = {
    name: "Martin",
    age: 27,
    isAdmin: false
};

const json = JSON.stringify(user);

console.log(typeof json);
console.log(typeof user);
*/


/*
const user = {
    name: "Martin",
    age: 27,
    sayHi() { },
    address: undefined,
    [Symbol("id")]: 123
};

console.log(JSON.stringify(user));
*/


/*
const arr = [1, undefined, function () { }, 3];

console.log(JSON.stringify(arr));
// "[1,null,null,3]"
*/

/*
const user = {
    name: "Martin",
    age: 27,
    password: "123456"
};

const json = JSON.stringify(user, function (key, value) {
    if (key === "password") return undefined;
    return value;
})

console.log(json)
*/


/*
const product = {
    name: "MacBook",
    price: 2000
};

console.log(JSON.stringify(product, null, 4));
*/

/*
const user = {
    name: "Martin",
    age: 27,

    toJSON() {
        return this.name;
    }
};

console.log(JSON.stringify(user));
*/

/*
const json = '{"name":"Martin","age":"27"}';

const user = JSON.parse(json, function (key, value) {
    if (key === "age") {
        return Number(value) * 2;
    }

    return value;
});

console.log(user);
console.log(typeof user.age);
*/

let room = { number: 23 };

let meetup = {
    title: "Conference",
    occupiedBy: [
        { name: "John" },
        { name: "Alice" }
    ],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

const data = JSON.stringify(meetup, function (key, value) {
    if (key !== "" && value === meetup) {
        return undefined;
    }
    return value;
}, 4)
console.log("data", data)

// {
//     "title": "Conference",
//     "occupiedBy": [
//         {
//             "name": "John"
//         },
//         {
//             "name": "Alice"
//         }
//     ],
//     "place": {
//         "number": 23
//     }
// }