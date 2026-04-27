# MEDICARE - Nhóm 7

Website bán thiết bị y tế tại nhà được xây dựng cho học phần Thiết kế Web. Dự án mô phỏng thương hiệu **MEDICARE / MediShop**, tập trung vào giao diện mua sắm thiết bị y tế chính hãng, dễ sử dụng, có danh mục sản phẩm, giỏ hàng, thanh toán và các trang hỗ trợ khách hàng.

## 1. Thông tin nhóm

| STT | Họ tên | MSSV | Vai trò |
| --- | --- | --- | --- |
| 1 | Nguyễn Thị Bảo Hân | 24126067 | Init source, dựng brand foundation, FAQ, README và baseline deploy |
| 2 | Trần Nguyễn Gia Hân | 24126068 | Đăng nhập, đăng ký, tìm kiếm, liên hệ, about, lỗi 404 |
| 3 | Phạm Thị Hồng Hậu | 24126070 | Giỏ hàng, cập nhật số lượng, mã giảm giá, thanh toán |
| 4 | Lê Thị Hải Yến | 24126286 | Trang chủ, tích hợp giao diện home và asset hình ảnh |
| 5 | Nguyễn Đào Thanh Ngân | 24126145 | Danh sách sản phẩm, filter, sort, phân trang, dữ liệu JSON |
| 6 | Lê Ngọc Bích Sơn | 24126193 | Chi tiết sản phẩm, gallery, thông số, hướng dẫn sử dụng, sản phẩm liên quan |
| 7 | Mai Thị Xuân Sinh | 24126191 | UI/UX, Figma, màu sắc, font và asset tham chiếu |

## 2. Mô tả dự án

**Chủ đề:** website thương mại điện tử bán thiết bị y tế tại nhà.

**Thương hiệu:** MEDICARE / MediShop - thiết bị y tế chính hãng, hỗ trợ chăm sóc sức khỏe gia đình.

**Tính năng nổi bật:**

- Trang chủ có banner hero, danh sách sản phẩm nổi bật và combo sức khỏe.
- Danh sách sản phẩm có lọc theo loại, lọc giá, sắp xếp và phân trang.
- Chi tiết sản phẩm có ảnh, giá, thông tin, hướng dẫn sử dụng và sản phẩm liên quan.
- Giỏ hàng và thanh toán chạy phía client bằng local state/localStorage.
- Đăng nhập, đăng ký, tìm kiếm, liên hệ, about, FAQ và trang lỗi 404.
- Hỗ trợ static export để deploy lên GitHub Pages.

## 3. Link dự án

- **Figma view-only:** https://www.figma.com/design/M23P3OxhEhCE7il6dnzoKN/Medical-Equipment?node-id=0-1&p=f&t=Cyr3LEOTjthMpP0s-0
- **GitHub Pages:** https://baohan24126067.github.io/nhom07_thietbiyte/
- **Repository:** https://github.com/baohan24126067/nhom07_thietbiyte

## 4. Công nghệ sử dụng

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- GitHub Actions
- GitHub Pages static export
- Playwright cho kiểm tra giao diện cơ bản

## 5. Hướng dẫn chạy local

Cài dependency:

```bash
npm install
```

Chạy môi trường dev:

```bash
npm run dev
```

Mở trình duyệt tại:

```text
http://localhost:3000
```

Build kiểm tra trước khi nộp:

```bash
npm run build
```

Nếu muốn xem bản static export giống GitHub Pages:

```bash
npx serve@latest out
```

## 6. Hướng dẫn deploy GitHub Pages

Repo đã cấu hình workflow tại:

```text
.github/workflows/deploy.yml
```

Các bước deploy:

1. Vào `Settings > Pages` trên GitHub.
2. Chọn source là `GitHub Actions`.
3. Push code lên branch `main`.
4. GitHub Actions chạy `npm ci`, `npm run build` và publish thư mục `out`.
5. Sau khi workflow hoàn tất, website public tại link GitHub Pages.

Cấu hình quan trọng trong `next.config.ts`:

- `output: "export"` để xuất static site.
- `images.unoptimized = true` để ảnh chạy được trên GitHub Pages.
- `trailingSlash = true` để route tĩnh hoạt động ổn định.
- `basePath` và `assetPrefix` tự động bật khi build trên GitHub Actions.

Lỗi đã gặp và cách xử lý:

- `next start` báo không dùng được với `output: export`: dùng `npm run dev` khi code local hoặc `npx serve@latest out` khi xem bản static.
- Ảnh 404 trên GitHub Pages: đưa ảnh vào `public/assets/images`, dùng helper `withBasePath()` và bật `images.unoptimized`.
- Route refresh bị 404: bật `trailingSlash` và deploy bằng static artifact `out`.
- GitHub Pages chưa cập nhật: kiểm tra tab `Actions`, chờ workflow deploy hoàn tất rồi hard refresh trình duyệt.

## 7. Ảnh chụp giao diện

### Trang chủ

![Trang chủ](docs/screenshots/home.png)

### Danh sách sản phẩm

![Danh sách sản phẩm](docs/screenshots/products.png)

### Liên hệ

![Liên hệ](docs/screenshots/contact.png)

## 8. Các route chính

- `/`: Trang chủ MEDICARE.
- `/products`: Danh sách sản phẩm, lọc, sắp xếp và phân trang.
- `/products/[slug]`: Chi tiết sản phẩm.
- `/cart`: Giỏ hàng.
- `/checkout`: Thanh toán.
- `/login`: Đăng nhập.
- `/register`: Đăng ký.
- `/search`: Tìm kiếm sản phẩm.
- `/about`: Giới thiệu nhóm.
- `/contact`: Liên hệ.
- `/faq`: Câu hỏi thường gặp.
- `/_not-found`: Trang lỗi 404 thân thiện.

## 9. Cấu trúc thư mục chính

```text
app/
  about/
  cart/
  checkout/
  contact/
  faq/
  login/
  products/
  register/
  search/
  globals.css
  layout.tsx
  page.tsx
components/
  cart-provider.tsx
  product-card.tsx
  site-footer.tsx
  site-header.tsx
lib/
  catalog-products.json
  cart.ts
  faq-content.ts
  products.ts
  search.ts
  team.ts
public/
  assets/images/
docs/
  screenshots/
```

## 10. Kết luận và hướng phát triển

Dự án đã hoàn thiện các trang và chức năng chính theo phân công: trang chủ, danh sách sản phẩm, chi tiết sản phẩm, giỏ hàng, thanh toán, đăng nhập/đăng ký, tìm kiếm, liên hệ, about, FAQ và 404. Website có thể build static và deploy công khai bằng GitHub Pages.

Hướng phát triển tiếp theo:

- Kết nối backend thật cho đăng nhập, đăng ký và đơn hàng.
- Bổ sung quản trị sản phẩm, tồn kho và lịch sử đơn hàng.
- Thêm kiểm thử E2E cho toàn bộ luồng mua hàng.
- Tối ưu responsive chi tiết hơn cho nhiều kích thước màn hình.
- Chuẩn hóa thêm nội dung SEO và metadata cho từng sản phẩm.
