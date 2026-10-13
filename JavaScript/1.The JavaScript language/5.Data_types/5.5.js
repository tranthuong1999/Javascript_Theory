// let numbers = [1, 2, 3];

// let a = numbers.map(n => n * 2);
// let b = numbers.forEach(n => n * 2);

// console.log(a); // [2, 4, 6]
// console.log(b); // undefined

// let prices = [10, 20, 30];

// let result = prices.map((item, index) => {
//     return item + index;
// });

// console.log(result);
// console.log(prices);

// let arr = [4, 1, 3];

// arr.sort((a, b) => {
//     if (a < b) return -100;
//     if (a > b) return 100;
//     return 0;
// });

// console.log(arr);


// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// fruits.splice(1, 2);

// console.log(fruits);
// console.log(fruits.length);

// let arr = ["A", "B", "C"];

// let copy = arr.slice();

// console.log(copy);      // ["A", "B", "C"]
// console.log(copy === arr); // false


// let numbers = [10, 20, 30];

// let copy = numbers.slice();
// copy.push(40);

// console.log(numbers);
// console.log(copy);

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach((item, index, array) => {
//     console.log(`${index}: ${item} (${array.length})`);
// });

// let numbers = [5, 10, 15];

// let result = numbers.forEach((item, index) => {
//     console.log(item * 2);
//     return index;
// });

// console.log("result:", result);

let numbers = [1, 2, 3];

let a = numbers.forEach(item => item * 2);
let b = numbers.map(item => item * 2);

console.log(a);
console.log(b);
console.log(numbers);

// let values = [NaN];

// console.log(values.indexOf(NaN));  // -1
// console.log(values.includes(NaN)); // true

// console.log("stat")
// let values = [NaN, 0, false, NaN];

// console.log(values.indexOf(NaN));
// console.log(values.lastIndexOf(NaN));
// console.log(values.includes(NaN));
// console.log(values.includes("0"));


// let numbers = [12, 3, 25, 1];

// numbers.sort();
// console.log(numbers);

// let number = [12, 3, 25, 1];

// number.sort();
// console.log(number);


// let str = "red-green-blue";

// let arr = str.split("-");
// console.log(arr);
// // ["red" , "green" , "blue"]

// let result = arr.join(" ");
// console.log(result);
// // red , green , blue

// console.log(result.split(""));

let user = {
    minAge: 18
};

let users = [
    { name: "An", age: 16 },
    { name: "Bình", age: 21 }
];

let adults = users.filter(item => item.age >= this.minAge, user);

console.log(adults);
// [{ name: "Bình", age: 21 }]

// bai tap
// function camelize(str) {

//     str = str.split("-").map((item, index) => {
//         if (index === 0) {
//             return item;
//         }
//         return item[0].toUpperCase() + item.slice(1)
//     })
//         .join("")

//     console.log(str);

//     return str;
// }

// camelize("background-color"); // "backgroundColor"
// camelize("list-style-image"); // "listStyleImage"
// camelize("-webkit-transition"); // "WebkitTransition"

// Task 2 — Filter range
// Viết hàm filterRange(arr, a, b) nhận 1 mảng arr và 2 gía trị a và b
//  Hàm cần tìm bao gồm các phần tử từ a đến b bao gồm cả 2 đầu mút

function filterRange(arr, start, end) {

    const value = arr.filter((item) => (item >= start && item <= end))
    return value
}


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // [3, 1]
// console.log(arr);      // [5, 3, 8, 1]

// let arr = [3, 4, 5]

// arr.splice(0, 1)
// console.log(arr)

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr); // [3, 1]

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// console.log(arr); // [3, 1]

// Task 3 — Filter range "in place"
// Đề bài gốc: Viết hàm filterRangeInPlace(arr, a, b) để loại bỏ khỏi mảng arr tất cả phần tử không nằm trong khoảng từ a đến b, bao gồm cả hai đầu mút.