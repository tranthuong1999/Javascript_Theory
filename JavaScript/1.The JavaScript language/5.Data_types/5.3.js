// const price = 10;
// console.log("Price: ${price}");



// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = 0;

// while (true) {
//     let foundPos = str.indexOf(target, pos);

//     if (foundPos === -1) break;

//     console.log(foundPos);
//     pos = foundPos + 1;
// }


// console.log("JavaScript".indexOf("Script"));
// console.log("JavaScript".indexOf("script"));


// let str = "cat and cat";

// console.log(str.indexOf("cat"));
// console.log(str.lastIndexOf("cat"));

// let str2 = "Hello";

// if (str2.indexOf("Hello")) {
//     console.log("Found!");
// }

// let str = "stringify";

// console.log(str.substring(2, 6)); // "ring"
// console.log(str.slice(6, 2)); // "ring"


// let str = "stringify";

// // console.log(str.slice(6, 2));
// // console.log(str.substring(6, 2));
// // console.log("a" > "b")
// console.log("b".localeCompare("m")); // Số âm
// console.log("m" > "b")

// Bắt đầu Task 1
// Đề bài: Viết hàm ucFirst(str) để viết hoa ký tự đầu tiên.Nếu chuỗi rỗng, hàm phải trả về chuỗi rỗng thay vì gây lỗi.
function ucFirst(str) {
    if (str.length === 0) return "";
    str = str[0].toUpperCase() + str.slice(1)
    console.log(str)
    return str;
}

ucFirst("john"); // "John"
ucFirst("martin"); // "Martin"
ucFirst(""); // ""

// Task 2 — Check for spam
// Đề bài chính thức: Viết hàm checkSpam(str) trả về true nếu chuỗi chứa "viagra" hoặc "XXX", không phân biệt chữ hoa hay chữ thường.

function checkSpam(str) {
    str = str.toLowerCase();
    const isSpam = str.includes("viagra") || str.includes("xxx")
    console.log(isSpam)
    return isSpam;
}


checkSpam("buy ViAgRA now"); // true
checkSpam("free xxxxx");     // true
checkSpam("innocent rabbit"); // false

// Task 3 — Truncate the text
/*
Đề bài: Viết hàm truncate(str, maxlength) để rút gọn chuỗi nếu độ dài vượt quá maxlength.
Quy tắc:
- Nếu chuỗi không vượt quá maxlength, trả về chuỗi ban đầu.
- Nếu chuỗi dài hơn maxlength, cắt bớt và thêm ký tự … ở cuối.
- Tổng độ dài chuỗi trả về không được vượt quá maxlength.
*/

function truncate(str, maxlength) {
    const strLength = str.length;
    if (strLength <= maxlength) return str;
    return str.slice(0, maxlength - 1) + "...";
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
// "What I'd like to te…"

console.log(truncate("Hi everyone!", 20));
// "Hi everyone!"

// Task 4 — Extract the money

function extractCurrencyValue(str) {
    str = str.slice(1)
    console.log(str);
    return +str;

}


extractCurrencyValue("$120"); // 120
extractCurrencyValue("$250"); // 250