/*
class Animal {
    run() {
        console.log("Animal runs");
    }
}

class Rabbit extends Animal {
    hide() {
        console.log("Rabbit hides");
    }
}

const rabbit = new Rabbit();

console.log(rabbit.hasOwnProperty("run"));
console.log(rabbit.hasOwnProperty("hide"));
console.log(Rabbit.prototype.__proto__ === Animal.prototype);
*/

/*
class Animal {
    run() {
        console.log("Animal runs");
    }
}

class Rabbit extends Animal {
    run() {
        super.run();
        console.log("Rabbit runs");
    }
}

const rabbit = new Rabbit();

rabbit.run();
*/

/*
class Parent {
    value = 10;

    constructor() {
        console.log(this.value);
        this.show();
    }

    show() {
        console.log("Parent");
    }
}

class Child extends Parent {
    value = 20;

    show() {
        console.log("Child");
    }
}

const child = new Child();

console.log(child.value); // 20
*/


/*
const animal = {
    name: "Animal",

    eat() {
        console.log(`${this.name} eats.`);
    }
};

const rabbit = {
    __proto__: animal,

    eat() {
        this.__proto__.eat.call(this);
    }
};

const longEar = {
    __proto__: rabbit,

    eat() {
        this.__proto__.eat.call(this);
    }
};

longEar.eat();
*/

/*
const parent = {
    show() {
        console.log("Parent");
    }
};

const child = {
    __proto__: parent,

    show() {
        super.show();
    }
};

const instance = {
    __proto__: child
};

instance.show();
*/
/*
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // Error
console.log(rabbit.name);
*/

/*
Điểm cần nhớ:
- Class con có constructor riêng phải gọi super() trước khi sử dụng this.
- super(name) vừa gọi constructor cha vừa truyền tham số cần thiết 
- Không cần khởi tạo lại những constructor mà cha đã xử lý
*/


class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
/*
Yêu cầu: 
Tạo class ExtendedClock kế thừa từ Clock và bổ sung tham số precision — khoảng thời gian giữa mỗi lần cập nhật (milliseconds).
Điều kiện:
- precision mặc định là 1000 (1 giây).
- Không sửa class Clock ban đầu.
-Code nằm trong file extended-clock.js.
*/

class ExtendedClock extends Clock {
    constructor(options) {
        // Gọi constructor cha

        // Lưu precision, mặc định 1000
    }

    start() {
        // Hiển thị thời gian ngay lập tức

        // Lặp lại theo this.precision
    }
}