Để hiểu own enumerable string keys , bạn hãy tách nó thành 3 khái niệm riêng biệt :
1. own - thuộc sở hữu trực tiếp từ object
2. Enumerable - có thể được liệt kê ( duyệt)
3. String keys : Key có kiểu dữ liệu string

Khi ghép lại, own enumerable string keys nghĩa là: các key thuộc kiểu string , được khai báo trực tiếp trên object và có thuộc tính
enumerable: true.
1. Own – Thuộc sở hữu trực tiếp
Một property được gọi là own property khi nó được khai báo trực tiếp trên object, không phải được kế thừa từ prototype.
<!-- 
const parent = {
    age: 25
};

const user = Object.create(parent);

user.name = 'Martin';

console.log(Object.keys(user));
// ['name']
 -->
Ở đây :
- name: Own property vì được khai báo trực tiếp trên user.
- age: Không phải own property của user, vì nó được kế thừa từ parent.

2. Enumerable – Có thể được liệt kê
Enumerable là thuộc tính mô tả property , quyết định property đó có xuất hiện trong những thao tác liệt kê Object.keys() hay không.
<!-- 
const user = {};

Object.defineProperty(user, 'name', {
    value: 'Martin',
    enumerable: false
});

user.age = 25;

console.log(Object.keys(user));
// ['age']
 -->
 Lưu ý: Khi tạo property bằng cách gán thông thường:
 <!-- user.age = 25; -->
 Property mặc định có enumerable: true.
 Còn khi dùng Object.defineProperty() ,nếu không khai bào enumerable mặc định nó là false

3. String keys – Key có kiểu String
JS Object có thể sử dụng String key và object key
<!-- 
const id = Symbol('id');

const user = {
    name: 'Martin',
    age: 27,
    [id]: 123
};

console.log(Object.keys(user));
// ['name', 'age']
 -->
 Tại sao không có id ?
 Vì id là Symbol key , không phải String key
 Muốn lấy Symbol keys:
 <!-- 
console.log(Object.getOwnPropertySymbols(user));
// [Symbol(id)]
  -->
Cách ghi nhớ:
Object.keys() => Own + Enumerable + String.
Object.getOwnPropertyNames() → Own + String.
Object.getOwnPropertySymbols() → Own + Symbol.
Reflect.ownKeys() => Tất cả own keys, gồm String và Symbol ,enumerable và non-enumerable.

Chú ý :
Object.create(parent) là phương thức dùng để tạo một object mới và thiết lập parent làm prototype của object đó
Nói đơn giản: Object mới có thể kế thừa các thuộc tính và phương thức từ parent
1. Cú pháp
<!-- Object.create(proto); -->
<!-- 
const id = Symbol('id');

const parent = {
    country: 'Vietnam'
};

const user = Object.create(parent);

user.name = 'Martin';

Object.defineProperty(user, 'age', {
    value: 27,
    enumerable: false
});

user[id] = 123;

console.log(Object.keys(user));
// ['name']
 -->

 Chú ý : const user = {};
Object sẽ kế thừa Object.prototype, nên có những mehtod như toString() , hasOwnProperty()
Nhưng:
<!-- const user = Object.create(null); -->
Object được tạo ra không có prototype ([[Prototype]] là null).
Vì vậy nó không kế thừa những phương thức trên

*******************************************************************************************************************
* Built-in Object (đối tượng tích hợp sẵn)
Built-in Object (đối tượng tích hợp sẵn) là những obect được JS cung cấp mặc định trong ngôn ngữ
| Built-in Object | Chức năng                                |
| --------------- | ---------------------------------------- |
| `Object`        | Làm việc với object                      |
| `Array`         | Làm việc với mảng                        |
| `Function`      | Làm việc với function                    |
| `String`        | Xử lý chuỗi                              |
| `Number`        | Xử lý số                                 |
| `Boolean`       | Làm việc với giá trị boolean             |
| `Date`          | Xử lý ngày tháng                         |
| `Math`          | Các phép toán                            |
| `JSON`          | Chuyển đổi JSON                          |
| `Map`           | Lưu trữ dữ liệu dạng key-value           |
| `Set`           | Lưu trữ các giá trị duy nhất             |
| `Promise`       | Xử lý bất đồng bộ                        |
| `RegExp`        | Xử lý biểu thức chính quy                |
| `Error`         | Xử lý lỗi                                |
| `Symbol`        | Tạo giá trị định danh duy nhất           |
| `Proxy`         | Can thiệp vào thao tác trên object       |
| `Reflect`       | Cung cấp các phương thức thao tác object |

3. Phân biệt Built-in Object và Native Prototype
Built-in Object: Là các object , constructor hoặc namespace được JS tích hợp sẵn
Native Prototype: là các prototype có sẵn trong JS , được sử dụng để cung cấp các phương thức và thuộc tính cho những object tương ứng
Giải thích:
- Array: Built-in Object (constructor).
- Array.prototype: Prototype có sẵn của Array.
- arr: Một instance được tạo từ Array.
- map(), filter(), reduce(): Các phương thức được định nghĩa trên Array.prototype.

Native prototype là cơ chế prototype được sử dụng để chia sẻ phương thức và thuộc tính của instance

