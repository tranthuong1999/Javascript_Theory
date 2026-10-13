function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
    return true;
}

//  Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (const key in salaries) {
    sum += salaries[key]
}
console.log(sum)
// Bài tập chính thức 4 — Multiply numeric property values by 2
/*
viết hàm multiplyNumeric(obj) để nhân đôi mọi thuộc tính có giá trị kiểu số, bỏ qua các thuộc tính không phải số. 
Hàm phải sửa trực tiếp object và không cần return. 
JavaScript.info
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(menu) {
    for (const key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2
        }
    }
}

multiplyNumeric(menu);

console.log(menu);
// {
//   width: 400,
//   height: 600,
//   title: "My menu"
// }
// let user = {
//     name: "Martin",
// };

// let admin = user;

// let profile = {
//     owner: admin,
// };

// user = null;
// admin = null;

// console.log(profile.owner.name);

// const user = {
//     firstName: "Martin",

//     sayHi() {
//         function normal() {
//             console.log(this);
//         }

//         const arrow = () => {
//             console.log(this.firstName);
//         };

//         normal();
//         arrow();
//     },
// };

// user.sayHi();


// bai tap 4.4

function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let user = makeUser();

console.log(user.ref.name);

// A. "John"
// B.undefined
// C.Phát sinh lỗi TypeError
// D.Lỗi cú pháp
// makeUser() được gọi độc lập nên this là undefined trong strict mode.
// ref: this khiến user.ref nhận giá trị undefined.
// Truy cập user.ref.name tương đương undefined.name, gây TypeError.
// Bài 6.3 — Chaining (nối chuỗi phương thức)