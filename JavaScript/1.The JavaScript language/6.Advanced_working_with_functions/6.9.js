/*
function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);

        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(1));
console.log(slow(2));
*/


/*
const mutiply = (x) => {
    return x * 2;
}

const cachingDecorator = (func) => {
    return function (x) {
        console.log("Wrapper call");
        return func(x);

    }

}


let wrappedMultiply = cachingDecorator(mutiply)
console.log(wrappedMultiply(5));
*/

/*
function original(x) {
    console.log("Original function");
    return x + 10;
}

function decorator(func) {
    return function (x) {
        console.log("Before");

        let result = func(x);

        console.log("After");

        return result;
    };
}

original = decorator(original);

console.log(original(5));
*/


/*
function slow(x) {
    console.log("Calculating slow...");
    return x * 2;
}

function square(x) {
    console.log("Calculating square...");
    return x * x;
}

function cachingDecorator(func) {
    const cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);
square = cachingDecorator(square);

console.log(slow(5));
console.log(slow(5));

console.log(square(5));
console.log(square(5));

*/

"use strict";
/*
let user = {
    name: "Alex",

    sayHi() {
        console.log(this.name);
    }
};

function wrap(func) {
    return function () {
        func();
    };
}

user.sayHi = wrap(user.sayHi);

user.sayHi();
*/

/*
function slow(a, b) {
    return a + b;
}

function cachingDecorator(func) {
    const cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        const result = func.call(this, x);
        cache.set(x, result);

        return result;
    };
}

const cachedSlow = cachingDecorator(slow);

console.log(cachedSlow(JSON.stringify([1, 2])));
*/

/*
function test(a, b) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(Array.isArray(arguments));
}

test(10, 20, 30);
*/

/*
function test() {
    const result = [].slice.call(arguments)

    console.log(result);
}

test("A", "B", "C", "D");
*/

/*
function decorator(func) {
    return function () {
        return func.apply(this, arguments);
    };
}

function sayHi() {
    console.log("Hello");
}

sayHi.counter = 0;

sayHi = decorator(sayHi);

console.log(sayHi.counter); // undefined
*/

// tại sao counter bị biến mất
/*
Ban đầu:
sayHi
├── Function
└── counter = 0
Sau khi Devorator chạy :
sayHi = decorator(sayHi);
Biến sayHI được gán sang 1 functio mới (wrapper)
wrapper k tự động kế thừa các properties của function gốc
Lưu ý : Property không bị xoá khỏi function gốc . Chỉ là biến sayHi hiện đang tham chiếu đến wrapper thay vì function gốc
*/

/*
function original() { }

original.version = "1.0";

function wrap(func) {
    return function () {
        return func.apply(this, arguments);
    };
}

const wrapped = wrap(original);

console.log(original.version);
console.log(wrapped.version);
*/

/* 
function original() {
    console.log("Hello");
}

original.version = "1.0";

const wrapped = new Proxy(original, {
    apply(target, thisArg, args) {
        console.log("Before");
        return target.apply(thisArg, args);
    }
});

wrapped();
console.log(wrapped.version);
*/

/*
Giải thích:
- new Proxy(original, ...) tạo một đối tượng Proxy đại diện cho original.
- apply() trap được gọi khi Proxy được gọi như một function.
- target là function gốc.
- thisArg là context khi gọi function.
- args là danh sách arguments.
- wrapped.version vẫn truy cập được property của function gốc thông qua Proxy.
*/

/*
function multiply(a, b) {
    return a * b;
}

multiply.description = "Multiply numbers";

const wrapped = new Proxy(multiply, {
    apply(target, thisArg, args) {
        return target.apply(thisArg, args);
    }
});

console.log(wrapped(3, 4));
console.log(wrapped.description);
*/

/* 
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);

        return func.call(this, ...args);
    }
    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {
    return a + b;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work.calls);
*/

function delay(f, ms) {
    return function (...args) {
        const context = this;

        setTimeout(() => {
            f.apply(context, args);
        }, ms);
    };
}

const user = {
    name: "Martin",

    sayHi(message) {
        console.log(`${message}, ${this.name}`);
    }
};

user.sayHi = delay(user.sayHi, 1000);

user.sayHi("Hello");
/*
Tại sao cần const context = this?
Vì function gốc được gọi sau một khoảng thời gian.Ta cần giữ lại this tại thời điểm wrapper được gọi
thay vì phụ thuộc vào context của callback trong setTimeout
Kiến thức cần nhớ
- setTimeout(): trì hoãn thực thi.
- ...args: chuyển tiếp arguments.
- apply(context, args): giữ this và truyền arguments.
- Closure: giữ lại f, ms, context và args để sử dụng khi callback chạy.
*/

// Các bước triển khai trong debounce
/*
1. Tạo biến timer để lưu ID của timer
2. Mỗi lần wrapper được gọi , kiểm tra timer cũ
3. Nếu timer cũ tồn tại , dùng clearTimeout() để huỷ
4. Tạo timer mới bằng setTimeout()
5. Khi timer chạy , gọi function gốc đúng với this và arguments
*/


/*
function debounce(func, ms) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, ms)
    }
}
*/

/*
Closure giữ biến timer:
let timer;
Mỗi lần gọi wrapper , ta vẫn truy cập được cùng 1 biến timer
Hủy timer cũ:
clearTimeout(timer);
Nếu người dùng tiếp tục nhập , timer cũ bị huỷ nên funcion chưa được thực thi
Tạo timer mới:
timer = setTimeout(() => {
    func.apply(context, args);
}, ms);
debouncedSearch("A");   // 0ms
debouncedSearch("AB");  // 200ms
debouncedSearch("ABC"); // 400ms
*/

// 0ms       Gọi "A"       → Tạo timer 500ms
// 200ms     Gọi "AB"      → Hủy timer cũ, tạo timer 700ms
// 400ms     Gọi "ABC"     → Hủy timer cũ, tạo timer 900ms
// 900ms                    → Thực thi search("ABC")




function throttle(func, ms) {
    let timer;

    return function (...args) {

        if (timer) return;

        const context = this;

        setTimeout(() => {
            func.call(context, args);
            timer = null;
        }, ms)
    }
}
/*
Ý tưởng :
Tạo biến timer để kiểm soát thời gian.
Khi wrapper được gọi, kiểm tra timer.
Nếu timer đang tồn tại thì bỏ qua lần gọi.
Nếu chưa có timer, thực thi function.
Sau ms, cho phép thực thi lần tiếp theo.
Giải thích :
Kiểm tra timer:
if (timer) return;
Nếu timer đang tồn tại functn k được thực thi
Thực thi function:
func.apply(context, args);
Giữ nguyên this và toàn bộ arguments
Mở khóa sau thời gian chờ:
timer = setTimeout(() => {
    timer = null;
}, ms);
Sau ms ,timer được đặt thành null , cho phép lần gọi tiếp theo thưc thi 

throttledLog("A"); // A
throttledLog("B"); // Bị bỏ qua
throttledLog("C"); // Bị bỏ qua
// Sau 1000ms
throttledLog("D"); // D
*/ 