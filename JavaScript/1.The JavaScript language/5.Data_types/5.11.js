/*
const date = new Date(2026, 9, 29);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

console.log(date.getDay());
*/


/*
const date = new Date(2026, 9, 30, 14, 25, 40);

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMonth());
*/


/*
const date = new Date("2026-10-30T00:00:00Z");
console.log(date.getHours());
console.log(date.getUTCHours());
*/


/*
const date = new Date("2026-10-30T00:00:00Z");

console.log(date.getUTCHours());
console.log(date.getHours());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
*/

/*
const date = new Date(2026, 9, 30);
date.setMonth(0);
console.log(date);
*/


/*
const date = new Date(2026, 9, 1);
date.setMonth(date.getMonth() + 1);
console.log(date);
*/

// đối tượng date ban đầu là 01/01/2026
/*
thiết lập ngày trong tháng
THông thương :
setDate(1) => ngày đầu tiên của tháng hiện tại
setDate(2) => ngày thứ 2
setDate(3) => ngày thứ 3
Ngay 0 chính là ngày cuối cùng của tháng trước đó: 31/12/2025


const date = new Date(2026, 0, 1);
date.setDate(0);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
*/

/*
const date = new Date(2026, 2, 1);

date.setDate(0);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
*/

/*
const date = new Date();
console.log(+date);
console.log(date.getTime());
*/


/*
const start = new Date("2026-10-25");
const end = new Date("2026-10-30");

const diff = end - start;

console.log(diff / (1000 * 60 * 60 * 24));
*/


// const date = new Date();

// console.log(typeof date);
// console.log(typeof Date.now());
// console.log(typeof date.getTime());

// Viết hàm getSecondsToTomorrow() trả về số giây còn lại cho đến ngày mai.

const getSecondsToTomorrow = () => {
    const now = new Date();

    const tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    )
    console.log("tomorrow", tomorrow)
    return Math.round((tomorrow - now) / 1000)
}

console.log(getSecondsToTomorrow())

const formatDate = (date) => {


}