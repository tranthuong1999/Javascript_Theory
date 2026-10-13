/*
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user.fullName); // John Smith
*/




/*
let user = {
    name: "Mrs",
    surname: "Martin",
    get fullName() {
        console.log(`this ${this.name} surname ${this.surname}`)
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ")
    }
}
user.fullName
user.fullName = "TRAN THUONG"
console.log(user.name)
console.log(user.surname)
*/

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}
let john = new User("John", new Date(1992, 6, 1));
console.log(john.birthday);
console.log(john.age);
