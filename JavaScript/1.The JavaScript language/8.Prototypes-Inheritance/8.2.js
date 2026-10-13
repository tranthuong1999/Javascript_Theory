/*
function Rabbit() { }

let animal = {
    eats: true
};

let plant = {
    grows: true
};

Rabbit.prototype = animal;

let rabbit = new Rabbit();

Rabbit.prototype = plant;

let rabbit2 = new Rabbit();

console.log(rabbit.eats);  // true
console.log(rabbit.grows); // undefined

console.log(rabbit2.eats);  // undefined
console.log(rabbit2.grows); // true
*/

/*
Tại sao?
- rabbit được tạo khi Rabbit.prototype đang tham chiếu đến animal.
- Sau đó, Rabbit.prototype được đổi sang plant.
- rabbit vẫn giữ prototype cũ là animal.
- rabbit2 được tạo sau đó nên có prototype là plant.
*/

/*
function Rabbit() { }
console.log(Rabbit.prototype.constructor === Rabbit); // true
*/

/*
function User() { }

let user = new User();

console.log(user.constructor === User);
console.log(User.prototype.constructor === User);
console.log(User.prototype.constructor === user.constructor);
*/

/*
function Rabbit() { }

Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};

let rabbit = new Rabbit();

console.log(rabbit.jumps); // true
console.log(rabbit.constructor === Rabbit); // false
*/


function Rabbit() { }

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

delete rabbit.eats;

alert(rabbit.eats); // true

delete Rabbit.prototype.eats;

alert(rabbit.eats); // ?

// Official Task 2/2 – Create an object with the same constructor

function User(name) {
    this.name = name;
}

let user = new User("John");

function createUser(name) {
    return new user.constructor(name);
}

let user2 = createUser("Pete");

console.log(user2.name); // Pete
console.log(user2 instanceof User); // true