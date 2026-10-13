/*
let user = {
    firstName: "John",

    sayHi() {
        console.log(`Hello, ${this?.firstName}!`);
    }
}

const sayHi = user.sayHi
sayHi();
*/

/*
let user = {
    firstName: "John",

    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 1000);
*/


/*
let user = {
    firstName: "John",

    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(function () {
    user.sayHi();
}, 1000);
*/


/*
let user = {
    name: "Martin",
    sayHi() {
        console.log(this.name);
    }
};

setTimeout(() => user.sayHi(), 1000);
*/

/*
let user = {
    name: "Martin",

    sayHi() {
        console.log(this.name);
    }
};

let f = user.sayHi.bind(user);

let anotherUser = {
    name: "John"
};

f.call(anotherUser);
*/
/*
function mutiply(a, b) {
    return a * b;
}

let double = mutiply.bind(null, 2)
console.log(double(5))
console.log(double(6))
*/
// BÀI TẬP CHÍNH THỨC
// ****************************************************************************************************************************
// Task 1
/*
function f() {
    console.log(this.name);
}

f = f.bind({ name: "John" });

let user = {
    name: "Pete",
    f: f.bind({ name: "Ann" })
};

user.f();
*/
/*
let user = {
  name: "Pete",
  f: f.bind({ name: "Ann" })
};
Ở đây, chúng ta tiếp tục gọi bind() trên function đã được bind trước đó.
Tuy nhiên , bind() lần thứ 2 không thể thay đổi this đã cố định ở lần đầu
Vì vậy:
- Lần bind thứ nhất: this = { name: "John" }.
- Lần bind thứ hai: { name: "Ann" } không có tác dụng thay đổi this.
- user.f() vẫn in ra John.
Kiến thức cần nhớ: Một bound function không thể bị thay đổi this bằng bind() lần nữa, call() hoặc apply().
*/
// ****************************************************************************************************************************
// Task 2
/*
function f() {
    console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Pete" });

f();
*/
// Lưu ý: Có thể gọi bind() nhiều lần, nhưng các lần sau không thể thay đổi this đã được cố định ở lần đầu.

// ****************************************************************************************************************************
//Task 3. Function property after bind

/*
function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "John"
});

console.log(bound.test);
*/
/*
Tại sao?
1. sayHi.test = 5 tạo property test trên function gốc sayHi.
2. bind() tạo ra một function mới là bound.
3. Function mới không tự động sao chép các property tùy chỉnh từ function gốc.
4. Vì vậy bound.test là undefined.
Ghi nhớ: bind() tạo function mới, không sao chép các property tùy chỉnh của function gốc.
*/

// ****************************************************************************************************************************
//Task 4. Fix a function that loses this
/*
let user = {
    firstName: "John",

    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi.bind(user), 1000);
*/



// ****************************************************************************************************************************
// Task 5. Partial application for login


function askPassword(oke, fail) {
    const password = prompt("Enter password")
    if (password === "oke") {
        oke()
    }
    else {
        fail()
    }
}

let user = {
    name: "John",
    loginOke() {
        console.log(`${this.name} logged in`);
        return ` Login succcess ${this.name}`
    },
    loginFailed() {
        console.log(`Login failed ${this.name}`);
        return `Login failed ${this.name}`
    }
}
askPassword(user.loginOke.bind(user), user.loginFailed.bind(user))
/*
Yêu cầu: Hoàn thiện dòng gọi askPassword() sao cho:
- Nếu nhập đúng mật khẩu, in John logged in.
- Nếu nhập sai mật khẩu, in John failed to log in.
- Không làm mất this của user.
*/ 