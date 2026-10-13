/*
function pow(x, n) {

    let result = 1;

    for (let i = 0; i <= n; i++) {
        result *= x;
    }

    return result;
}
console.log(pow(2, 5))
*/

/*
function test(n) {
    if (n === 0) {
        return;
    }

    console.log("Start", n);

    test(n - 1);

    console.log("End", n);
}

test(2)
*/

/*

let company = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 1600 }
    ],

    development: {
        sites: [
            { name: "Peter", salary: 2000 },
            { name: "Alex", salary: 1800 }
        ],

        internals: [
            { name: "Jack", salary: 1300 }
        ]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce(
            (sum, employee) => sum + employee.salary,
            0
        );
    }

    let sum = 0;

    // console.log("checking", Object.values(department))

    for (let subDepartment of Object.values(department)) {
        console.log("checking", subDepartment)
        sum += sumSalaries(subDepartment);
    }

    return sum;
}

console.log(sumSalaries(company)); // 7700

*/


/*
const list = {
    value: 10,
    next: {
        value: 20,
        next: {
            value: 30,
            next: null
        }
    }
};


function printRevertList(list) {
    if (list.next) {
        printRevertList(list.next);
    }

    console.log(list.value)
}
printRevertList(list)
*/


/*
function printList(list) {
    console.log(list.value)
    if (list.next) {
        printList(list.next)
    }
}
printList(list)
*/


/*
function printList(list) {
    let current = list;

    while (current) {
        console.log(current.value)
        current = current.next;
    }

}

printList(list);
*/


/*
function printReverseList(list) {
    const values = [];
    let current = list;

    while (current) {
        values.push(current.value);
        current = current.next;
    }

    for (let i = values.length - 1; i >= 0; i--) {
        console.log(values[i]);
    }
}
printReverseList(list)
*/

/*
let list = {
    value: 10,
    next: {
        value: 20,
        next: {
            value: 30,
            next: null
        }
    }
};

list = list.next;

console.log(list.value);
console.log(list.next.value);
*/


/*
Giai đoạn 1 – Gọi hàm:
factorial(4)
= 4 * factorial(3)
= 4 * 3 * factorial(2)
= 4 * 3 * 2 * factorial(1)

Giai đoạn 2 – Trả kết quả:
factorial(1) = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
Độ phức tạp
Time complexity: O(n) – gọi hàm n lần.
Space complexity: O(n) – Call Stack lưu các lần gọi hàm.
*/

/*
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
*/



// Yêu cầu: In tất cả giá trị của Linked List theo thứ tự từ đầu đến cuối.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function printList(list) {
//     let current = list;

//     while (current) {
//         console.log(current.value)
//         current = current.next
//     }
// }




const printList = (list) => {
    if (list.next) {
        printList(list.next)
    }
    console.log(list.value)
}
console.log(printList(list))
/*
Giai đoạn 1 – Gọi đệ quy:
printList(1)
  printList(2)
    printList(3)
      printList(4)
Các function chưa in ra giá trị vì phải chời lời goi đệ quy hoàn thành
Giai đoạn 2 – Quay lui (Unwinding):
printList(4) → in 4
printList(3) → in 3
printList(2) → in 2
printList(1) → in 1
*/ 