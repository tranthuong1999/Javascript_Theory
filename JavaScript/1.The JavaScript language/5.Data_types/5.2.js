/*
JavaScript Number
├── 1. Floating-point precision (Sai số số thực)
│   ├── Nguyên nhân: Number dùng chuẩn IEEE 754 (64-bit)
│   ├── Một số thập phân không biểu diễn chính xác bằng nhị phân
│   ├── Ví dụ: 0.1 + 0.2
│   │   └── 0.30000000000000004
│   └── Cách xử lý
│       ├── toFixed(2): làm tròn để hiển thị, trả về string
│       ├── Math.round(): làm tròn số
│       ├── So sánh bằng ngưỡng sai số phù hợp
│       └── Tiền bạc: cân nhắc lưu bằng số nguyên
│
├── 2. Các phép toán có thể gặp sai số
│   ├── +  : Cộng
│   ├── -  : Trừ
│   ├── *  : Nhân
│   ├── /  : Chia
│   ├── ** : Lũy thừa
│   └── %  : Chia lấy dư
│
├── 3. Giới hạn số nguyên an toàn
│   ├── Number.MAX_SAFE_INTEGER
│   │   └── 9007199254740991
│   ├── Vượt giới hạn: có thể mất độ chính xác
│   └── BigInt: xử lý số nguyên lớn
│       └── Không giải quyết trực tiếp sai số số thập phân
│
├── 4. Object.is(value1, value2)
│   ├── So sánh hai giá trị, không ép kiểu
│   ├── Object.is(NaN, NaN) → true
│   ├── Object.is(0, -0) → false
│   └── Object/Array: so sánh tham chiếu
│
├── 5. NaN (Not-a-Number)
│   ├── typeof NaN → "number"
│   ├── NaN === NaN → false
│   ├── Object.is(NaN, NaN) → true
│   └── Number.isNaN(value)
│       ├── Không ép kiểu
│       ├── Number.isNaN(NaN) → true
│       └── Number.isNaN("hello") → false
│
└── 6. Kiểm tra số hữu hạn (Finite)
    ├── isFinite(value)
    │   ├── Có ép kiểu
    │   ├── isFinite("100") → true
    │   └── isFinite(null) → true
    │
    └── Number.isFinite(value)
        ├── Không ép kiểu
        ├── Number.isFinite(100) → true
        ├── Number.isFinite("100") → false
        └── Number.isFinite(Infinity) → false
*/

const billion = 1_000_000_000;

console.log(billion); // 1000000000

const num = 10;
const binary = num.toString(2);

console.log(binary);        // "1010"
console.log(typeof binary); // "string"


console.log(num.toString(2));
console.log(num.toString(16));
console.log(typeof num.toString(2));


console.log(Math.floor(3.8)); // 3
console.log(Math.ceil(3.1));  // 4
console.log(Math.round(3.5)); // 4
console.log(Math.trunc(3.8)); // 3


// console.log(Math.floor(-3.2)); // -4
// console.log(Math.ceil(-3.1));  // -3
// console.log(Math.round(-3.6)); // -3
// console.log(Math.trunc(-3.2)); // -3


console.log(NaN === NaN)
/*
NaN trong JavaScript
├── typeof NaN
│   └── "number"
├── NaN === NaN
│   └── false
├── Object.is(NaN, NaN)
│   └── true
└── Number.isNaN(value)
    └── Kiểm tra value có thực sự là NaN không
*/

// Task 1 — Sum numbers from the visitor

// function Sum() {
//     const a = +prompt("Nhap a:", 0)
//     const b = +prompt("Nhap b:", 0)
//     if (!Number.isFinite(a) || !Number.isFinite(b)) {
//         throw ("Ban nhap 1 trong 2 so k hop le")
//     }
//     return +a + +b;
// }
// console.log(Sum())

/*
Số thực trong JavaScript có thể được lưu gần đúng.
Sai số có thể ảnh hưởng đến phép so sánh và làm tròn.
toFixed() trả về chuỗi, không phải số.
Khi xử lý tiền tệ, nên cân nhắc lưu bằng đơn vị nhỏ nhất (ví dụ đồng hoặc xu) thay vì dựa trực tiếp vào số thập phân.
*/

/*
1. Đề bài
Tạo một hàm readNumber() thực hiện các yêu cầu:
- Dùng prompt() yêu cầu người dùng nhập một số.
- Nếu người dùng nhập giá trị không phải số, tiếp tục hỏi lại.
- Nếu người dùng nhấn Cancel hoặc để trống, trả về null.
- Khi nhập một số hợp lệ, trả về giá trị đó dưới dạng number.
*/


function readNumber() {
    while (true) {
        const input = prompt("Nhap input", 0)
        if (input?.trim() === '' || input === null) {
            return null;
        }
        const number = Number(input);
        if (Number.isFinite(number)) {
            return number;
        }
    }
}

// readNumber();

// for (let count = 0; count <= 50; count++) {
//     const i = count * 0.2;
//     console.log(i)
// }

// Điểm cần nhớ
// - while (true) tạo vòng lặp cho đến khi gặp return.
// - return kết thúc hàm ngay lập tức.
// - Number.isFinite() kiểm tra giá trị đã chuyển đổi có phải số hữu hạn hay không.
// - Kiểm tra input === null trước khi chuyển đổi để giữ đúng ý nghĩa của nút Cancel.

function random(min, max) {
    // Math.random() 0 => 1
    const result = min + Math.random() * (max - min)
    return result;
}
/*
Math.random()         → [0, 1)
Math.random() * 4     → [0, 4)
1 + Math.random() * 4 → [1, 5)
*/
// Viết hàm randomInteger(min, max) trả về một số nguyên ngẫu nhiên từ min đến max, bao gồm cả hai đầu mút.

function randomInteger(min, max) {

    const result = Math.random() * (max - min + 1) + min

    return Math.floor(result);
}

console.log(randomInteger(1, 5));