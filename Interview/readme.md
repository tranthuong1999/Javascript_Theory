em có thấy phía anh PV sẽ có hỏi đến 1 vài vấn đề: Promise, async/await và try/catch.
React Hook.
API trong React như thế nào.
Performace : xử lý  bài toán
xử lý loop api
các debug 1 page react bị chậm
Memoryleak

***********************************************


Promise : là 1 đối tượng đại điện cho kết quả của 1 task vụ bất đồng bộ  chẳng hạn như call api , đọc dữ liệu hoặc thực hiện 
1 task vụ mất time

Promise có 3 trạng thái :
Pending : đang chờ kết quả
FullField : thành công 
Reject : thất bại 

async/await : là 1 cú pháp viết code bất đồng bộ dễ hơn 
1.3. try/catch dùng để làm gì?
try catch dùng để bắt lỗi khi viết hàm async /await 
1.4. Phân biệt các cách xử lý bất đồng bộ
Cách viết	Ý nghĩa
.then()	Xử lý kết quả Promise
.catch()	Xử lý Promise bị reject
async/await	Viết code bất đồng bộ dễ đọc hơn
try/catch	Bắt lỗi đồng bộ và lỗi từ Promise được await trong khối try

2. React Hooks
React hook là các hàm cho phép function component sử dụng state, lifecycle-like behavior mà không cần viết class component

useState — Quản lý state
useEffect : call api , xử lý side effect : 
useMemo : ghi nhớ giá trị tính toán
useCallback — Ghi nhớ function
useRef : lưu giá trị không cần render lại 
2.1. Quy tắc quan trọng của Hooks

3. API trong React như thế nào?
 có 3 cách để call api mình sử dụng fetch , axios hoặc thư viện quản lý server state như tanstack query
 3.2. Khi nào dùng useEffect, khi nào dùng TanStack Query?

Tức là mình có thể sử dụng useEfect call api cơ bản nhưng tanstack query nó có hỗ trợ : 
loading , error , cache dữ liệu ,Refetch, retry

***********************************************

4. Performance — giải quyết bài toán hiệu năng

Một trang react có 1000 sản phẩm mỗi lần nhập ô tìm kiếm đều bị giất thì em xử lý như thế nào
1. ĐO và tái hiện : các định thao tác nào gây chậm 
2. Tối ưu đúng chỗ : giảm số phần tử render , tách component , tối ưu tính toán , debounce , cache hạowc giảm kich thương dữ liêu 


4.3. Phân biệt các kỹ thuật tối ưu
React.memo : ghi nhớ props của component
useMemo : ghi nhớ giá trị 
useCallback : ghi nhớ hàm 
debounce : chỉ thực hiện hành dộng sau khi người dùng dứng thao tác 1 thơi gian
Throttle
Pagination : chỉ tải hoặc hiển thị 1 phần dữ liệu 
Virtualization: chỉ hiện thị dữ liệu trong vùng nhìn thấy

Khi gặp performance em tái hiện xem vấn đề ở đầu. Nếu render thừa kiểm tra state , props.
List lớn cần nhănc sử dụng Pagination hoặc Virtualization

***********************************************
5. Xử lý loop API — gọi nhiều API
   
5.1. Trường hợp A: Gọi API tuần tự

async function loadData() {
  const user = await getUser();
  const orders = await getOrders(user.id);

  return orders;
}
API B phải chờ API A vì cần user.id

Nếu A phàn hồi trong 500ms , B trong 700ms thì time xấp xỉ 1200ms

5.2. Trường hợp B: Gọi API song song

Giả sử ba API không phụ thuộc lẫn nhau:
async function loadDashboard() {
  const [users, products, orders] = await Promise.all([
    getUsers(),
    getProducts(),
    getOrders(),
  ]);

  return { users, products, orders };
}
Promise.all() : reject khi 1 trong các api bị reject nhưng không tụ động huy các api còn lại 
Promise.allSettled : nếu muốn thu thập  kết qủa thành công lẫn thất bại của từng request

5.3. Trường hợp C: Loop gọi API theo danh sách ID

Tuy nhiên cũng k nên gọi song song 100 hoặc 1000 request vì có thể làm quá tải backend hoặc 

Promise.all: reject ngay khi có một Promise reject.
Promise.allSettled: chờ tất cả hoàn thành và trả kết quả từng request.
Giới hạn concurrency: tránh tạo quá nhiều request đồng thời.
Retry: chỉ retry khi phù hợp, có giới hạn số lần và backoff.
Hủy request: sử dụng AbortController khi request không còn cần thiết.

***********************************************
6. Debug một trang React bị chậm

Xác định nguyên nhân 
1. React render chậm 
2. API chậm 
3. JavaScript chạy quá lâu
4. Memory leak

Component bị call api liên tục 

***********************************************
7. Memory leak trong React

Memory leak rò rỉ bộ nhớ là chương trình vẫn giữ các đối tượng không cần thiết , khiến chúng k thể giải phóng bộ nhớ

setTimeOut hoặc setInterval k được clear
Event listerner được đăng ký nhưung k được gỡ bỏ

7.4. Memory leak khi gọi API

Những request không cần khi người dùng chuyên trang có thể dùng AbortController


***********************************************

1. Tổng hợp: Những câu hỏi phụ bạn nên chuẩn bị
Khi sử dụng Promise.all(), các request được khởi chạy độc lập. Nếu một Promise bị reject thì Promise.all() sẽ reject ngay và đi vào catch, nhưng nó không tự động hủy những request còn lại. Nếu muốn thu thập kết quả của tất cả request, kể cả request thất bại, em sẽ sử dụng Promise.allSettled()

5. Debounce và thortle 
   Thottle : giới hạn số lần thực thi trong 1 thoi gian
   Debounce : chờ người dùng thao tác 1 khonag thời gian 

 4.  Concurrency (đồng thời) là khả năng xử lý nhiều công việc trong cùng một khoảng thời gian.
   
   Gửi quá nhiều request cùng 1 lúc 

6. Vì sao api nhanh nhưng vẫn lag 
   Xử lý dữ liệu năngj , render nhiều component , danh sách lớn 