/*
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;


console.log(rabbit.eats);  // true
console.log(rabbit.jumps); // true
console.log(animal.eats); // true
*/

/*
let animal = {
    eats: true,

    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jump: true,
    __proto__: animal
}

rabbit.walk(); // Animal walk
console.log(rabbit.eats)
*/

/*
let animal = {
    eats: true,

    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk(); // Animal walk


rabbit.walk = function () {
    console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
*/

/*
let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log("I walk");
        }
    },

    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined

*/

/*

let parent = {
    count: 0,

    increase() {
        this.count++;
    }
};

let child = {
    __proto__: parent,
    count: 10
};

child.increase();

console.log(child.count);
console.log(parent.count);
*/

/*
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(Object.keys(rabbit));
// ["jumps"]

for (let prop in rabbit) {
    console.log(prop);
}
*/

// *********************************************************************************************************
// Task 1.  Working with prototype

/*
let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // ? (1) true

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) null

delete animal.jumps;

alert(rabbit.jumps); // ? (3) undefined
*/

/*
(1) true : rabbit có property jumps riêng với giá trị true . JS ưu tiên proprty của object hiện tại
(2) null : sau khi xoá propety riêng , JS tìm trong prototype là animal và tìm thấy jump : null
(3) undefined : Propety jump đã bị xoá hết ở rabbit và animal , nên JS k tìm thấy nữa
Kết luận: delete chỉ delete trên objec chỉ định không xoá propety trên prototype chain
*/

// *********************************************************************************************************
// Task 2: Official Task 2/4 – Searching algorithm

let head = { glasses: 1 };

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};
/*
pockets
   ↓
  bed
   ↓
 table
   ↓
  head
*/

console.log(pockets.glasses); // 1
console.log(bed.glasses);     // 1
console.log(table.money);     // undefined

/*
Yêu cầu 2: So sánh tốc độ truy cập
Bạn nghĩ head.glasses nhanh hơn vì nó nằm trực tiếp trong head
Đây là suy luận hợp lý , nhưng theo đáp án chính thức
Trong JS engineer hiện dại , hai cách truy cập thường không có khác biệt đáng kể về hiệu suất
pockets.glasses;
head.glasses;
Lý do : JS engineer có thể tối ưu việc truy cập bằng cách ghi nhớ property đã được tìm thấy và tái sử dụng nó
ở nhưng lần truy cập tiếp theo
Kết luận Task 2
- Prototype chain của bạn: đúng.
- pockets.glasses: tìm thấy glasses trong head.
- head.glasses: truy cập trực tiếp.
- Hiệu suất: JavaScript engine hiện đại tối ưu cả hai trường hợp.
*/

// *********************************************************************************************************
// Task 3: Where does it write?
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
/*
Câu hỏi: Sau khi chạy rabbit.eat(), property full được tạo trên object nào?
- A. animal
- B. rabbit
- C. Cả animal và rabbit
- D. Không object nào
Ghi nhớ: Method được tìm thấy trong prototype không có nghĩa là this sẽ trỏ đến prototype.
*/

// *********************************************************************************************************
// Official Task 4/4 – Why are both hamsters full?

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");

console.log(speedy.stomach); // apple
console.log(lazy.stomach);   // apple, why?
