/*
let user = {
    name: "Martin",
    sayHi() {
        let arrow = () => {
            console.log(this.name)
        }
        arrow();
    }
}
*/

/*
let user = {
    name: "Martin",

    sayHi() {
        let arrow = () => {
            console.log(this.name);
        };

        arrow();
    }
};

let admin = {
    name: "John"
};

user.sayHi.call(admin);


const Person = (name) => {
    this.name = name;
};

console.log(typeof Person);
*/

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        let arrow = () => {
            super.speak();
        }
        arrow();
    }
}

new Dog().speak();