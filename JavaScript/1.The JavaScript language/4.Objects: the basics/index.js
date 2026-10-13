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

// function makeUser() {
//     return {
//         name: "John",
//         ref: this,
//     };
// }

// let user = makeUser();

// console.log(user.ref.name);

// const user = {
//     name: "martin",
//     sayHi() {
//         console.log(this.name)
//     }
// }

// user.sayHi()
// A. "John"
// B.undefined
// C.Phát sinh lỗi TypeError
// D.Lỗi cú pháp
// makeUser() được gọi độc lập nên this là undefined trong strict mode.
// ref: this khiến user.ref nhận giá trị undefined.
// Truy cập user.ref.name tương đương undefined.name, gây TypeError.
// Bài 6.3 — Chaining (nối chuỗi phương thức)

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// const p1 = new Product("Laptop", 1500);
// const p2 = new Product("Phone", 800);

// p1.price = 1200;

// console.log(p1.price);
// console.log(p2.price);

// function Accumulator(value) {
//     this.value = value;
//     this.read = function () {
//         const a = +prompt("Nhap value", 0);
//         this.value += a;
//         console.log("sum", this.value);
//     }
// }

// let accumulator = new Accumulator(1);

// accumulator.read(); // Nhập 5 → value = 6
// accumulator.read(); // Nhập 3 → value = 9

// alert(accumulator.value); // 9

// 
// let user = null;
// let x = 0;

// user?.sayHi(x++);

// console.log(x); // 0

// const user = {
//     admin: "yes"
// };

// user.admin?.(); // TypeError


// const id = Symbol("id");

// console.log(String(id)); // "Symbol(id)"
// console.log(id.description); // "id"

// const a = Symbol("user");
// const b = Symbol("user");

// console.log(a === b);
// console.log(a.description === b.description);

// const id1 = Symbol("id");
// const id2 = Symbol("id");

// const user = {
//     name: "Martin",
//     [id1]: 100,
//     [id2]: 200
// };

// console.log(user[id1]);
// console.log(user[id2]);



// const key = Symbol("role");

// const user = {
//     key: "admin",
//     [key]: "user"
// };

// console.log(user.key);
// console.log(user[key]);
// console.log(JSON.stringify(user));
// console.log(Reflect.ownKeys(user));

const id1 = Symbol("id");
const id2 = Symbol("id");
const id3 = Symbol.for("id");
const id4 = Symbol.for("id");

const obj = {
    name: "JavaScript",
    [id1]: 10,
    [id3]: 20
};

let count = 0;

for (const key in obj) {
    count++;
}

console.log(id1 === id2);
console.log(id3 === id4);
console.log(count);
console.log(Reflect.ownKeys(obj).length);
console.log(Symbol.keyFor(id1));


const key = Symbol("id");

const user = {
    id: 100,
    [key]: 200
};

console.log(user.id);
console.log(user[key]);
console.log(Object.keys(user).length);

console.log("checking")
console.log(+[])
console.log(+{})
// Boolean() và chuyển đổi số là hai cơ chế khác nhau. Đừng suy luận rằng object rỗng sẽ tương ứng với false hoặc 0.

const objs = {
    valueOf() {
        return 10;
    }
};

console.log(objs + 5);  // 15
console.log(objs == 10); // true



