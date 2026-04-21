# HƯỚNG DẪN TÍCH HỢP GIAO DIỆN MEDISHOP VÀO DỰ ÁN

Để đưa toàn bộ giao diện đã hoàn thiện vào dự án của bạn (Hải Yến), bạn hãy thực hiện theo các bước sau đây:

## 1. Cấu trúc thư mục chuẩn
Đảm bảo bạn sao chép các tệp vào đúng vị trí để các liên kết (link) ảnh và CSS không bị lỗi. Cấu trúc khuyến nghị:
```text
Duan_HaiYen/
├── index.html           # File giao diện chính
├── style.css            # Toàn bộ CSS (Layout + Responsive)
├── main.js             # Logic giỏ hàng (Javascript)
└── assets/
    └── images/          # Thư mục chứa 10 ảnh đã tải về
        ├── hero.jpg
        ├── product-1.jpg
        └── ... (đến product-9.jpg)
```

## 2. Kiểm tra các liên kết (Linking)
Trong file `index.html`, tôi đã thiết lập các đường dẫn tương đối. Hãy đảm bảo các dòng sau ở đúng vị trí:
- **CSS:** `<link rel="stylesheet" href="style.css">` (nằm trong thẻ `<head>`)
- **JS:** `<script src="main.js"></script>` (nằm cuối thẻ `<body>`)
- **Ảnh:** `src="assets/images/product-1.jpg"` (đảm bảo thư mục `assets/images` tồn tại)

## 3. Cách thêm sản phẩm mới
Nếu bạn muốn thêm mặt hàng thứ 10, 11... hãy copy khối mã sau và dán vào bên trong `<div class="product-grid">`:

```html
<article class="card" id="product-10">
  <div class="card-img-wrap">
    <img src="assets/images/product-new.jpg" alt="Tên sản phẩm" class="card-img">
  </div>
  <div class="card-body">
    <p class="card-title">Tên thiết bị y tế mới</p>
    <div class="card-price">Giá tiềnđ/ Đơn vị</div>
    <p class="card-unit">ĐVT: Hộp</p>
    <button class="btn-add" onclick="addToCart(this)">Thêm vào giỏ hàng</button>
  </div>
</article>
```
*Lưu ý: Grid sẽ tự động sắp xếp thêm hàng mới một cách cân đối.*

## 4. Tùy chỉnh màu sắc thương hiệu
Nếu bạn muốn thay đổi màu xanh chủ đạo (Blue) sang màu khác, bạn chỉ cần tìm và thay đổi mã màu sau trong file `style.css`:
- **Chính:** `#2563EB` (Xanh đậm)
- **Phụ:** `#f0f9ff` (Xanh nhạt)

## 5. Sử dụng báo cáo cho file Word
Nội dung minh chứng kỹ thuật cho bài nộp (Phần 2.2) đã được chuẩn bị sẵn trong file `BaoCao_Phan2.2.md`. Bạn chỉ cần:
1. Mở file đó lên.
2. Copy toàn bộ văn bản.
3. Dán vào file Word báo cáo đồ án của mình.
4. Chèn thêm ảnh chụp màn hình dự án của bạn là hoàn thiện.

---
**Chúc Hải Yến hoàn thành dự án xuất sắc!**
