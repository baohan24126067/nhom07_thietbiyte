# MEDICARE

Website bán thiết bị y tế tại nhà được xây dựng cho bài thi Thiết kế Web. Repo này hiện đang chứa phần foundation do **Bảo Hân** triển khai: dựng source project, thiết lập nhận diện chung, làm trang `FAQ` và chuẩn bị baseline deploy lên GitHub Pages.

## Công nghệ sử dụng

- Next.js 16 App Router
- Tailwind CSS 4
- TypeScript
- GitHub Actions + GitHub Pages static export

## Trạng thái hiện tại

Đã hoàn thành trong repo:

- dựng nền source từ đầu
- brand shell theo style Medishop
- trang đặc trưng theo chủ đề: `FAQ`
- baseline deploy GitHub Pages

Các phần còn lại của nhóm sẽ tiếp tục phát triển trên cùng nền này:

- danh sách sản phẩm
- chi tiết sản phẩm
- giỏ hàng và thanh toán
- đăng nhập, tìm kiếm, liên hệ, about, 404

## Các route đang có

- `/` : Trang chủ foundation của Medishop
- `/faq` : Trang câu hỏi thường gặp về thiết bị y tế tại nhà

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Build kiểm tra

```bash
npm run lint
npm run build
```

Repo đang dùng `output: "export"` để phù hợp với GitHub Pages.

## Deploy GitHub Pages

Repo đã có workflow tại:

```text
.github/workflows/deploy.yml
```

Nguyên tắc deploy:

- push lên branch `main`
- GitHub Actions sẽ build static export vào thư mục `out`
- artifact `out` sẽ được publish lên GitHub Pages

Thiết lập cần có trên GitHub:

1. Vào `Settings > Pages`
2. Chọn source là `GitHub Actions`
3. Đảm bảo repo public hoặc Pages đã được bật đúng quyền

`next.config.ts` đã có sẵn:

- `output: "export"`
- `images.unoptimized = true`
- `trailingSlash = true`
- `basePath` và `assetPrefix` tự động dùng tên repo khi chạy trên GitHub Actions

## Cấu trúc thư mục chính

```text
app/
  faq/
  globals.css
  layout.tsx
  page.tsx
components/
  site-footer.tsx
  site-header.tsx
lib/
  faq-content.ts
```

## Ghi chú theo scope Bảo Hân

Trong phần đã làm của Bảo Hân:

- init source project
- dựng brand foundation
- chọn và triển khai trang đặc trưng theo chủ đề là `FAQ`
- chuẩn bị baseline deploy và tài liệu README

Phần này được chia nhỏ thành nhiều checkpoint commit để thuận lợi cho chấm điểm đóng góp cá nhân trên GitHub.
