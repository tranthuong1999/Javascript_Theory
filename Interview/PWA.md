PWA(progressive web app ) là ứng dụng web được phát triển để mang lại trải nghiệm giống như native trên
điện thoại  hoặc máy tính , nhưng vẫn chạy trê trình duyệt 
Những thành phần quan trọng gồm Web App Manifest để khai báo thông tin ứng dụng và Service Worker để hỗ trợ caching, offline và push notification. PWA giúp người dùng có thể cài ứng dụng từ website mà không nhất thiết phải thông qua app store.

1. PWA có những đặc điểm gì?
2. PWA hoạt động như thế nào?
3. PWA khác website và ứng dụng native như thế nào?
4. PWA trong dự án React/Next.js
5. Liên hệ với dự án Kyuun của bạn
Nếu dự án Next.js có tích hợp Serwist PWA, hãy hiểu vai trò của nó theo hướng sau:
- Next.js: xây dựng giao diện và routing.
- Serwist: hỗ trợ quản lý Service Worker, precache và runtime caching.
- Web App Manifest: cung cấp thông tin để trình duyệt nhận diện ứng dụng có thể cài đặt.
- Push notification: cần thêm cơ chế đăng ký nhận thông báo và tích hợp với hệ thống gửi thông báo nếu dự án yêu cầu.
  Điểm cần nhớ: PWA không phải framework thay thế React hay Next.js. Đây là tập hợp các công nghệ và khả năng giúp ứng dụng web có trải nghiệm gần với ứng dụng được cài đặt.

PWA là Progressive Web App, một ứng dụng web có thể mang lại trải nghiệm gần giống native app. Những thành phần quan trọng gồm Web App Manifest để khai báo thông tin ứng dụng và Service Worker để hỗ trợ caching, offline và push notification. PWA giúp người dùng có thể cài ứng dụng từ website mà không nhất thiết phải thông qua app store.