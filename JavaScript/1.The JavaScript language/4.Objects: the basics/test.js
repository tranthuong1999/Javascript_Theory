const user = { name: "John" };


console.log(user.valueOf() === user); // true


const product = {
    valueOf() {
        return {};
    },

    toString() {
        return "25";
    }
};

console.log(+product);
console.log(String(product));
console.log(product + 5);

const obj = {
    [Symbol.toPrimitive](hint) {
        return false;
    }
};

console.log(+obj);
console.log(String(obj));
console.log(obj + 1);