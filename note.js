const parent = {
    age: 25
};

const user = Object.create(parent);

user.name = 'Martin';

console.log(Object.keys(user));
console.log(user.age);
