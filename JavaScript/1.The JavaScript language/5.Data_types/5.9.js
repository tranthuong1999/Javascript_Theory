/*
const product = {
    name: "Laptop",
    price: 1500,
    stock: 5
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
*/


/*
const map = new Map();

map.set("name", "John");
map.set("age", 30);

console.log([...map.keys()]);
map.values();
map.entries();
*/


/*
const user = {
    name: "John",
    age: 30
};

const map = new Map([
    ["name", "John"],
    ["age", 30]
]);

const objectKeys = Object.keys(user);
const mapKeys = map.keys();

console.log(Array.isArray(objectKeys));
console.log(Array.isArray(mapKeys));
console.log([...mapKeys]);
*/


/*
const id = Symbol("id");

const user = {
    name: "An",
    age: 25,
    [id]: 123
};

console.log(Object.keys(user));
// ["name", "age"]

console.log(Object.values(user));
// ["An", 25]

console.log(Object.entries(user));
// [["name", "An"], ["age", 25]]
console.log(Object.getOwnPropertySymbols(user));
// [Symbol(id)]
*/


/*
const scores = {
    An: 8,
    Binh: 6,
    Chi: 9
};

const value = Object.fromEntries(Object.entries(scores).map(([key, value]) => [key, value * 2]))
console.log(value)
*/


/*
const products = {
    Laptop: 1500,
    Mouse: 20,
    Keyboard: 80,
    Monitor: 300
};

const data = Object.fromEntries(Object.entries(products).filter(([k, value]) => value >= 100))
*/


/*
const sumSalaries = (obj) => {
    const sum = Object.values(obj).reduce((a, b) => a + b, 0)
    console.log("sum", sum);
    return sum;
}


let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
};

sumSalaries(salaries); // 650
*/

/*
const count = (obj) => {
    return Reflect.ownKeys(obj).length
}


let user = {
    name: "John",
    age: 30
};

console.log(count(user)); // 2
*/


/*
const camelize = (str) => {

    const value = str.split("-").map((item, index) => {
        if (index === 0) {
            return item;
        }
        return item[0].toUpperCase() + item.slice(1)
    }).join("");
    console.log("value", value)
    return value;
}



camelize("background-color"); // "backgroundColor"
camelize("list-style-image"); // "listStyleImage"
camelize("-webkit-transition"); // "WebkitTransition"
*/

