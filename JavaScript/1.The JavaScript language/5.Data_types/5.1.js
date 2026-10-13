const n = 12.345;

console.log(n.toFixed(1));
console.log(typeof n);
console.log(typeof n.toFixed(1));
/*
- toFixed(1) làm tròn đến một chữ số thập phân và trả về chuỗi "12.3".
- n vẫn có kiểu number.
- Giá trị trả về của toFixed(1) có kiểu string
*/

// const a = Boolean(false);
// const b = new Boolean(false);

// console.log(typeof a); // "boolean"
// console.log(typeof b); // "object"

// console.log(Boolean(a)); // false
// console.log(Boolean(b)); // true


const x = new Boolean(false);

if (x) {
    console.log("A");
} else {
    console.log("B");
}

console.log(x === false);

let str = "Hello";

str.test = 5;

alert(str.test);
// str là primitive, không phải object.
// JS chỉ tạo wrappr pbject tạm thời để xử lý viẹc truy cập propety
