/*
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hello ${this.name}`;
    }
}

let user = new User("Martin");

console.log(user.name);
console.log(user.sayHi());
console.log(typeof User)
*/


/*
class Product {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let product = new Product("Laptop");

console.log(product.hasOwnProperty("getName"));
console.log(Product.prototype.hasOwnProperty("getName"));
*/


/*
class Product {
    getName() {
        return "Laptop";
    }
}

console.log(
    Object.getOwnPropertyDescriptor(
        Product.prototype,
        "getName"
    ).enumerable
);
*/

/*
const User = class MyClass {
    getName() {
        return MyClass.name;
    }
};

const user = new User();

console.log(user.getName());
console.log(User.name);
// console.log(MyClass);
*/

/*
function createClass(name) {
    return class {
        getName() {
            return name;
        }
    }
}
const userA = createClass("Martin")
const userB = createClass("John")
console.log(new userA().getName())
console.log(new userB().getName())
*/

/*
class Product {
    constructor(price) {
        this.price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value * 2;
    }
}

const product = new Product(100);

console.log(product.price);
*/

/*
class Product {
    set price(value) {
        if (value < 0) {
            return;
        }

        this._price = value;
    }

    get price() {
        return this._price;
    }
}

const product = new Product();

product.price = 100;
product.price = -50;

console.log(product.price);
*/

/*
function User(name) {
    this._name = name;
}

Object.defineProperty(User.prototype, "name", {
    get() {
        return this._name;
    }
});

const user = new User("Martin");

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("_name"));
*/

/*
const methodName = "sayHi";

class User {
    [methodName]() {
        console.log("Hello");
    }
}

const user = new User();

user.sayHi(); // Hello
*/
/*
class User {
    name = "Martin";

    constructor(age) {
        this.age = age;
    }

    sayHi() {
        return "Hello";
    }
}

const user = new User(27);

console.log(user.hasOwnProperty("name"));
console.log(User.prototype.hasOwnProperty("sayHi"));
*/

/*
class User {
    name = "Martin";

    sayHi() {
        console.log("Hello");
    }
}

const user1 = new User();
const user2 = new User();

console.log(user1.sayHi === user2.sayHi); // true
console.log(user1.name === user2.name);   // true
*/

/*
class Counter {
    count = 0;

    increase() {
        this.count++;
    }
}

const a = new Counter();
const b = new Counter();

a.increase();
a.increase();

console.log(a.count);
console.log(b.count);
*/

/*
let count = 0;

function getValue() {
    count++;
    return count;
}

class Product {
    id = getValue();
}

const a = new Product();
const b = new Product();
const c = new Product();

console.log(a.id, b.id, c.id);
*/



class User {
    name = "Martin";

    sayHi = () => {
        console.log(this.name);
    };
}

const user = new User();
const fn = user.sayHi;

fn();

console.log(user.hasOwnProperty("sayHi"));
console.log(User.prototype.hasOwnProperty("sayHi"));


// ********************************************

// function Clock({ template }) {
//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };
// }


class Clock {
    constructor(template) {
        this.template = template;
        this.timer = null;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
const clock1 = new Clock('h:m:s');
const clock2 = new Clock('h:m:s');

clock1.start();
clock2.start();