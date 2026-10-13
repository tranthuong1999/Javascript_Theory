// let user = { name: "Martin" };
// let scores = new Map();

// scores.set(user, 100);

// console.log(scores.get(user)); // 100
// console.log(scores)

// let map = new Map();

// map.set(1, "A");
// map.set("1", "B");
// map.set(1, "C");

// console.log(map.size);
// console.log(map.get(1));
// console.log(map.get("1"));


// let map = new Map();

// map.set("a", 10);
// map.set("b", 20);
// map.set("a", 30);

// console.log(map)

// let map = new Map();

// let a = { id: 1 };
// let b = { id: 1 };

// map.set(a, "Hello");

// console.log(map.get(a));
// console.log(map.get(b));
// console.log(map.size);

// let map = new Map();

// map.set("name", "Martin")
//     .set("age", 27)
//     .set("role", "Developer");

// console.log(map.size); // 3
// console.log(map); // 27

// const map = new Map([
//     ["name", "Martin"],
//     ["age", 27],
//     ["job", "Developer"]
// ]);

// console.log([...map.values()]);
// ["name", "age", "job"]

// const map = new Map([
//     ["x", 10],
//     ["y", 20]
// ]);

// map.set("z", 30);

// console.log([...map.keys()]);
// console.log(map.keys().length);

// const map = new Map([
//     ["a", 1],
//     ["b", 2]
// ]);

// map.set("a", 10);
// map.set("c", 3);

// console.log([...map.entries()]);
// console.log([...map.entries()].length);

// const map = new Map([
//     ["x", 1],
//     ["y", 2],
//     ["z", 3]
// ]);

// map.delete("y");
// map.set("x", 10);
// map.set("y", 20);

// console.log([...map.keys()]);
// console.log([...map.values()]);

// const map = new Map([
//     ["a", 10],
//     ["b", 20]
// ]);

// map.forEach((value, key) => {
//     console.log(value + 1, key);
// });

// const map = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["a", 3]
// ]);

// console.log(map.size);
// console.log(map.get("a"));
// console.log([...map.keys()]);

// const obj = {
//     name: "An",
//     age: 25
// };

// const map = new Map(Object.entries(obj));

// console.log(map.size);
// console.log(map.get("age"));
// console.log(map.get(25));

/*
const map = new Map([
    ["1", "one"],
    ["2", "two"]
]);

const obj = Object.fromEntries(map);
const mapAgain = new Map(Object.entries(obj));

console.log(obj["1"]);
console.log(mapAgain.get("2"));
console.log(mapAgain.size);
*/


// Bài tập về set
/*
const set = new Set();

set.add(1);
set.add(2);
set.add(1);

console.log(set.size);
console.log(set.has(1));
console.log(set.delete(2));
console.log([...set]);
*/

/*
const set = new Set();

const a = { id: 1 };

set.add(a);
set.add(a);
set.add({ id: 1 });
set.add(NaN);
set.add(NaN);

console.log(set.size);
*/

/*
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const uniqueFruits = [...new Set(fruits)];

console.log(uniqueFruits);
console.log(uniqueFruits.length);
*/

/*
const set = new Set([10, 20, 10, 30]);

set.delete(20);
set.add(10);
set.add(40);

console.log(set)
for (const value of set) {
    console.log(value);
}
*/


/*
const set = new Set([1, 2, 2, 3]);

set.forEach((value) => {
    console.log(value * 2);
});
*/


/*
const set = new Set([10, 20]);

set.forEach((value, valueAgain, collection) => {
    console.log(value, valueAgain, collection.size);
});
*/

/*
const set = new Set([1, 2, 2, 3]);

console.log([...set.keys()]);
console.log([...set.values()]);
console.log(set.keys() === set.values());
*/

/*
const set = new Set([10, 20, 10]);

console.log([...set.entries()]);
console.log([...set.entries()].length);
*/


/*
Cho một array arr. 
Hãy viết hàm unique(arr) trả về một array chỉ chứa các phần tử không trùng lặp. 
Yêu cầu của đề: sử dụng Set để lưu các giá trị duy nhất.
*/



/*
function unique(arr) {
    const value = [... new Set(arr)]
    return value;
    /* your code */
// }

// let values = [
//     "Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert(unique(values));
// Hare, Krishna, :-O
// */ 




/*
function aclean(arr) {
    let map = new Map();
    arr.forEach((item) => {
        const key = item.split("").sort().join("").toLowerCase();
        if (!map.has(key)) {
            map.set(key, item)
        }
    });
    return [...map.values()];
}

let arr = [
    "nap", "teachers", "cheaters",
    "PAN", "ear", "era", "hectares"
];

// alert(aclean(arr));
console.log(aclean(arr))

*/

// Có thể trả về:
// "nap", "teachers", "PAN", "ear"
// Hoặc một kết quả tương đương giữ lại một từ mỗi nhóm.
// tức là key vẫn là item chuyển thành lower case và săp xêp còn value thì giữ nguyên

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()]

// Error: keys.push is not a function
keys.push("more");
console.log(keys)