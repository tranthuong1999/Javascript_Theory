/*
class User {
    constructor(name) {
        this.name = name;
    }

    static showName(user) {
        console.log(user.name);
    }
}

const user = new User("Martin");

console.log(user)

// User.showName(user); // Martin
*/

/*
class User {
    name = "martin";

    static sayHello() {
        console.log("Hello");
    }

    sayHi() {
        console.log("Hi");
    }
}

const user = new User();

console.log(User.hasOwnProperty("sayHello"))
console.log(User.hasOwnProperty("name"))
// console.log(User.prototype.hasOwnProperty("sayHi"))
*/

/*
class User {
    role = "ADMIN";
}
const user = new User();

console.log(user.hasOwnProperty("role")); // true
console.log(User.prototype.hasOwnProperty("role")); // false
*/

/*
class Product {
    static category = "Electronics";

    constructor(name) {
        this.name = name;
    }
}

const product1 = new Product("Laptop");
const product2 = new Product("Phone");

product1.name = "MacBook";

console.log(Product.category);
console.log(product1.name);
console.log(product2.name);
*/
/*
class Animal {
    static showType() {
        return this.name;
    }
}

class Rabbit extends Animal { }

console.log(Rabbit.showType());
*/


/*
class Animal {
    static type = "Animal";
}

class Rabbit extends Animal { }

Rabbit.type = "Rabbit";

console.log(Animal.type);
console.log(Rabbit.type);
console.log(Rabbit.hasOwnProperty("type"));
*/

class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

// alert(rabbit.hasOwnProperty("name")); // ?
/*
super() gọi constructor của Object.
this.name = name tạo property name trực tiếp trên instance rabbit.
hasOwnProperty("name") kiểm tra instance có sở hữu trực tiếp property đó không.
Vì vậy kết quả là true.
*/

class User {
    constructor(name) {
        this.name = name;
    }

    static showName() {
        console.log(this.name);
    }
}

const user = new User("Martin");
User.showName(); // undefined