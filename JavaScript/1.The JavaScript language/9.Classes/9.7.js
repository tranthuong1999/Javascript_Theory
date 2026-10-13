/*
const sayMixin = {
    say() {
        console.log("Hello");
    }
};

class User { }

Object.assign(User.prototype, sayMixin);

const user = new User();

console.log(user instanceof User);
console.log(user instanceof sayMixin);
console.log(typeof user.say);
*/

/*
const loggerMixin = {
    log() {
        console.log(this.name);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, loggerMixin);

const user = new User("Martin");
user.log();
*/
/*
const parentMixin = {
    say() {
        console.log("Hello");
    }
};

const childMixin = {
    __proto__: parentMixin,

    walk() {
        console.log("Walking");
    }
};

console.log(typeof childMixin.say);
console.log(typeof childMixin.walk);
// function , function

class Person { }

Object.assign(Person.prototype, childMixin);

const person = new Person();

console.log(typeof person.say);
console.log(typeof person.walk);
*/

/*
const sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

const sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
        super.say(`Hello ${this.name}`);
    }
};

const user = {
    name: "Martin"
};

Object.assign(user, sayHiMixin);

user.say(); // TypeError
*/



// 
let eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) {
            this._eventHandlers = {};
        }

        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }

        this._eventHandlers[eventName].push(handler);
    }
};

const user = {};

Object.assign(user, eventMixin);

user.on("login", () => {
    console.log("User logged in");
});

user.on("login", () => {
    console.log("Send welcome notification");
});

console.log(user)
