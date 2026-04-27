# Checklist phần Bảo Hân

Tài liệu này ghi lại các đầu việc thuộc scope Bảo Hân để đối chiếu nhanh khi nộp bài và báo cáo nhóm.

## Branding và foundation

- Tên thương hiệu: `MEDICARE`
- Chủ đề: website thương mại điện tử thiết bị y tế tại nhà
- Tông màu chính: xanh dương, xanh nhạt, trắng
- Font chính: cấu hình trong `app/layout.tsx` và `app/globals.css`
- Layout dùng chung: `SiteHeader`, `SiteFooter`, container responsive và nền xanh nhạt

## Trang đặc trưng theo chủ đề

- Route: `/faq`
- Nội dung: câu hỏi thường gặp về mua hàng, bảo quản, hỗ trợ đơn hàng và an toàn khi dùng thiết bị y tế tại nhà
- Data nguồn: `lib/faq-content.ts`
- Mục tiêu: bổ sung chiều sâu nội dung ngoài các trang bán hàng bắt buộc

## Deploy và tài liệu

- Deploy target: GitHub Pages
- Workflow: `.github/workflows/deploy.yml`
- Build command: `npm run build`
- Static export: cấu hình trong `next.config.ts`
- README: cập nhật route, công nghệ, phân công và hướng dẫn chạy local

## Lưu ý khi demo

- Mở `/` để giới thiệu foundation và style chung.
- Mở `/faq` để trình bày trang đặc trưng của Bảo Hân.
- Mở `/about` để chứng minh danh sách thành viên, MSSV và GitHub account đã được cập nhật.
- Mở GitHub Actions để kiểm tra deploy public sau khi push `main`.
