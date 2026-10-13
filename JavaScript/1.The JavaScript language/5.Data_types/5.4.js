

// let arr = [
//     "Apple",
//     { name: "martin" },
//     true,
//     function () {
//         console.log("hello")
//     }
// ]

// console.log(arr.length)


// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits.at(0));
// console.log(fruits.at(-0));
// console.log(fruits.at(-4));
// console.log(fruits[-1]);


// let arrs = [1, 2, 3];

// console.log(arrs.push(4));
// // 4
// console.log(arrs.pop());
// // 4
// console.log(arrs);
// 

// let arrs = [10, 20, 30];

// console.log(arrs.unshift(5));
// // 4
// console.log(arrs.shift());
// // 5
// console.log(arrs);


// let arr = ["B", "C"];

// arr.push("D");
// arr.unshift("A");
// // [A ,B , C ,D]
// let last = arr.pop();
// // D
// let first = arr.shift();
// // A
// console.log(first);
// console.log(last);
// console.log(arr); 


// let fruits = ["Apple", "Orange"];

// fruits[2] = "Pear";
// console.log(fruits.length);

// fruits.name = "My fruits";
// Dòng này không thêm phần tử vào mảng, mà thêm một thuộc tính có tên name cho object fruits.Thuộc tính name k được tính vào length
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.name);



// let arr = [];

// arr[0] = "Apple";
// arr[5] = "Pear";

// console.log(arr.length); // 6
// console.log(arr[1]);     // undefined
// console.log(arr[5]);     // "Pear"
// console.log(arr);     // "Pear"

// let arr = [];
// arr[2] = undefined;

// console.log(arr.length);
// console.log(0 in arr);
// console.log(2 in arr);

// let arr = ["A", "B"];
// arr.name = "Test";

// for (let key in arr) {
//     console.log(key);
// }

// let arr = ["A", "B"];

// arr.length = 4;

// console.log(arr.length);
// console.log(arr[2]);
// console.log(2 in arr)
// ;

// let arr = new Array(3, 5, 8)
// console.log(arr);        // [3, 5, 8]
// console.log(arr.length); // 3


// let a = [5];
// let b = new Array(5);

// console.log(a.length); // 1
// console.log(b.length); // 5
// console.log(0 in a);   // true
// console.log(0 in b);   // false

// let arr = new Array(3);

// arr[1] = "Hello";

// console.log(arr.length);
// console.log(0 in arr);
// console.log(1 in arr);
// console.log(arr[1]);



// matrix
// let matrix = [
//     ["A", "B"],
//     ["C", "D"],
//     ["E", "F"]
// ];

// console.log(matrix[0][0]);
// console.log(matrix[1][1]);
// console.log(matrix[2][0]);
// console.log(matrix[0]);


// let arr = [
//     [10, 20],
//     [30, 40]
// ];

// arr[0][1] = 99;

// console.log(arr[0]);
// console.log(arr[1][0]);
// console.log(arr[0][1]);

// let arr = [[1, 2], [3, 4]];

// console.log(arr.toString()); // "1,2,3,4"

// let arr = ["A", "B", "C"];

// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(arr);

// let arr = ["A", "B"];

// arr.push("C");
// arr[5] = "F";

// console.log(arr.length);
// console.log(arr.at(-1));

// arr.length = 3;

// console.log(arr);

/*
Yêu cầu: Viết hàm sumInput():
1. Yêu cầu người dùng nhập các số bằng prompt().
2. Lưu các giá trị đã nhập vào một mảng.
3. Dừng việc nhập khi người dùng nhập giá trị không phải số, nhập chuỗi rỗng hoặc nhấn Cancel.
4. Trả về tổng các số đã nhập.
*/

function sumInput() {
    let arr = [];
    while (true) {
        const input = +prompt("Nhap input");
        if (!Number.isFinite(input) || !input) {
            //  neu la 0 cung lam dieu kien dung
            break;
        }
        arr.push(input);
    }

    return arr.reduce((a, b) => a + b, 0)

}

// function sumInput() {
//     const arr = [];

//     while (true) {
//         const value = prompt("Nhập một số");

//         if (value === null || value.trim() === "") {
//             break;
//         }

//         const input = Number(value);

//         if (!Number.isFinite(input)) {
//             break;
//         }

//         arr.push(input);
//     }

//     return arr.reduce((sum, number) => sum + number, 0);
// }


// Bài tiếp theo: getMaxSubSum(arr) — tìm tổng lớn nhất của một đoạn phần tử liên tiếp trong mảng.

// [2, -5, 3, 4]


function getMaxSubSum(arr) {

    let currentSum = 0;
    let maxSum = 0;

    for (const num of arr) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += num;

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    console.log("max sum", maxSum)
    return maxSum;

}


getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([2, -1, 2, 3, -9]); // 6
getMaxSubSum([-1, -2, -3]); // 0
getMaxSubSum([2, -5, 3, 4]); // 0

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics"
const lastEle = styles.shift();
console.log(lastEle);
styles.unshift("Rap", "Reggae")


/*
Thêm "Rock-n-Roll" vào cuối mảng.
Thay thế phần tử ở giữa bằng "Classics".
Xóa phần tử đầu tiên và hiển thị nó.
Thêm "Rap" và "Reggae" vào đầu mảng.
*/


let arr = ["A", "B", "C", "D"];

let removed = arr.splice(1, 1, "X");
//  remove [ "A" , "X" , "C", "D"]
let part = arr.slice(1, 3);
let combined = arr.concat(["Y", "Z"]);

// console.log(arr);
// console.log(removed);
// console.log(part);
// console.log(combined);

// arr [ "A" , "X" , "C", "D"]
// remove ["B"]
// part ["X","C"]
// combined: [ "A" , "X" , "C", "D" , "Y", "Z"]

let numbers = [10, 20, 30, 40, 50];

let a = numbers.splice(1, 2);
// a = [20, 30]
// numbers [10 , 40 ,50]
let b = numbers.slice(1, 3);
// b = [40, 50]
let c = numbers.concat([60, 70]);
// c = [10, 40,50, 60, 70]

console.log(numbers);
console.log(a);
console.log(b);
console.log(c);