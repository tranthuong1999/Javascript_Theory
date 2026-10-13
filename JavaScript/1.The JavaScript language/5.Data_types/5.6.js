let range = {
    from: 1,
    to: Infinity,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                return { done: false, value: this.current++ };
            }
        };
    }
};

for (let num of range) {
    if (num > 5) break;
    console.log(num);
}


// let str = "OK";
// let iterator = str[Symbol.iterator]();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);


// let str = "A😂B";

// console.log(str.length);
// console.log(Array.from(str).length);
// console.log(Array.from(str).slice(0, 2).join(""));

// let str = "ABC";
// let iterator = str[Symbol.iterator]();

// console.log(iterator.next().value);
// console.log(iterator.next().value);

// let iterator2 = str[Symbol.iterator]();

// console.log(iterator2.next().value);


let str = "😂";

console.log(str.length);
console.log(Array.from(str).length);
console.log(str.split(""));