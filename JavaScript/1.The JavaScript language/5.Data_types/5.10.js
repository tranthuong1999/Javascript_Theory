/*
const numbers = [10, 20, 30];
const [a, b] = numbers;

console.log(a);
console.log(b);
*/


/*
const [a, b, c] = "Cat";

console.log(a); // "C"
console.log(b); // "a"
console.log(c); // "t"


const [first, second, third] = "JS";

console.log(first);
console.log(second);
console.log(third);
*/


/*
const product = {
    name: "Mouse",
    price: undefined,
    quantity: null
};

const {
    name,
    price = 100,
    quantity = 1,
    stock = 10
} = product;

console.log(name);
console.log(price);
console.log(quantity);
console.log(stock);
*/

/*
const account = {
    username: undefined,
    role: "admin"
};

const {
    username: displayName = "Guest",
    role: userRole = "user"
} = account;

console.log(displayName);
console.log(userRole);
*/

/*
const user = {
    name: "An",
    age: 25,
    city: "Hanoi"
};

const { name, ...rest } = user;

console.log(name); // "An"
console.log(rest); // { age: 25, city: "Hanoi" }
*/


// let user = {
//     name: "John",
//     years: 30
// };

// const { name, year: age, isAdmin = false } = user

// 6.2. Bài tập chính thức — The maximal salary
/*
Yêu cầu:
- Nếu object rỗng, trả về null.
- Nếu có nhiều người cùng mức lương cao nhất, trả về một người bất kỳ trong số họ.
- Dùng Object.entries() và destructuring để duyệt dữ liệu.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Martin": 300,
};

const topSalary = (salaries) => {
    const maxSalary = Math.max(...Object.values(salaries));
    const check = Object.fromEntries(Object.entries(salaries).filter(([key, value]) => value === maxSalary))

    return Object.keys(check)
}

console.log(topSalary(salaries))