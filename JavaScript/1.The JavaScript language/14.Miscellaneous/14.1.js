/*
const user = {
    name: "Martin"
}


const proxy = new Proxy(user, {
    get(target, property) {
        if (property in target) {
            return target[property]
        }
        return "unknow"
    }
})
console.log(proxy.name)
console.log(proxy.age)
*/

/*
const user = new Proxy({}, {
    set(target, property, value) {
        if (property === "age" && value < 0) {
            return false;
        }

        target[property] = value;
        return true;
    }
});

user.age = 25;
console.log(user)
*/

/*
let user = {
    name: "John",
    age: 30,
    _password: "***"
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith("_"))
    }
})

for (let item in user) {
    console.log(item)
}
console.log(Object.keys(user));
console.log(Object.values(user));
*/


/*
let user = {};

user = new Proxy(user, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    }
});

console.log(Object.keys(user));
*/

/*
let ranger = {
    start: 1,
    end: 10
}
ranger = new Proxy(ranger, {
    has(target, property) {
        return property >= target.start && property <= target.end;
    }
})
console.log(5 in ranger)
console.log(50 in ranger)
*/

/*
function sayHi(name) {
    return `Hi ${name}`
}

const proxy = new Proxy(sayHi, {})
console.log(proxy("martin"))
*/

/*
function multiply(a, b) {
    return a * b;
}

const proxy = new Proxy(multiply, {
    apply(target, thisArg, args) {
        console.log("Calling function");
        return target.apply(thisArg, args);
    }
});

console.log(proxy(2, 3));
*/

/*
const user = {
    name: "John"
};

console.log(Reflect.get(user, "name")); // John
console.log(Reflect.set(user, "age", 25)); // true
console.log(Reflect.has(user, "name")); // true
console.log(Reflect.has(user, "age")); // true
console.log(user)
console.log(Reflect.deleteProperty(user, "name")); // true
console.log(user)
*/

/*
let user = {
    _name: "Guest",

    get name() {
        return this._name;
    }
};

let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
        return target[prop];
    }
});

let admin = {
    __proto__: userProxy,
    _name: "Admin"
};
console.log(userProxy.name); // Guest
*/

/*
let map = new Map()

let proxy = new Proxy(map, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);

        return typeof value === 'function' ? value.bind(target) : value;
    }

})
proxy.set('test', 1)
console.log(proxy.get("test"))
*/

/*
const target = { name: "Martin" };

const { proxy, revoke } = Proxy.revocable(target, {});

revoke();

console.log(target.name);
console.log(proxy.name);
*/

// *******************************************************
// Bài tập thực hành

/*
const user = {
    name: "John"
};

const proxy = new Proxy(user, {
    get(target, prop) {
        if (prop in target) {
            const value = Reflect.get(target, prop, receiver);
            return value;
        }
        throw new ReferenceError(`Property doesn't exist: "${prop}"`);
    }
})

console.log(proxy.age)
console.log(proxy.name)
*/

/*
let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(array[array.length - 1]); // 3
console.log(array[-2]); // 2
console.log(array[-3]); // 1
console.log(array[0]);  // 1
console.log(array.length); // 3
*/
let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function (handler) {
        this[handlers].push(handler);
    };

    return new Proxy(target, {
        set(target, property, value, receiver) {
            let success = Reflect.set(...arguments);

            if (success) {
                target[handlers].forEach(handler => handler(property, value));
            }

            return success;
        }
    });
}

let user = {
    name: "John"
};

user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "Pete"; // SET name=Pete
user.age = 25;      // SET age=25