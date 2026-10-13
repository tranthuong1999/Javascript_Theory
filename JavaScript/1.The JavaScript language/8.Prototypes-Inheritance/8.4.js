/*
let animal = {
    eat: true
}

let rabbit = {
    __proto__: animal
}

console.log(rabbit.eat)
console.log(Object.getPrototypeOf(rabbit) === animal)
*/

/*
let animal = {
    eats: true
};

let rabbit = Object.create(animal);

console.log(Object.getPrototypeOf(rabbit) === animal);
console.log(rabbit.__proto__ === animal);
console.log(rabbit === animal);
*/

/*
let animal = {
    eats: true
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(Object.keys(rabbit));

*/
/*
let animal = { eats: true };
let rabbit = Object.create(animal);

console.log(rabbit.hasOwnProperty("eats"));
console.log(Object.getPrototypeOf(rabbit) === animal);
*/


/*
let parent = { name: "Parent" };
let child = { age: 20 };

Object.setPrototypeOf(child, parent);

console.log(Object.getPrototypeOf(child) === parent);
console.log(child.name);
console.log(child.hasOwnProperty("name"));


let user = {};

user["__proto__"] = "Martin";

console.log(user["__proto__"]);
console.log(Object.keys(user));
*/
const obj_1 = {
    age: 29,
    toString() {
        return this.age;
    },
    valueOf() {
        return this.age;
    }
}
const obj_2 = Object.create(null);


console.log(obj_1.valueOf())
