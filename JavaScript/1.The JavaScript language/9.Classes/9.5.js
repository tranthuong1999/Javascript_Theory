/*
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

const arr = new PowerArray(1, 2, 5, 10, 50);

const filteredArr = arr.filter(item => item >= 10);

console.log(filteredArr);           // [10, 50]
console.log(filteredArr.isEmpty()); // false
*/

class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

const arr = new MyArray(1, 2, 3);
const result = arr.filter(x => x > 1);

console.log(result instanceof MyArray);


const date = new Date();

console.log(date.toString());
console.log(Date.keys);