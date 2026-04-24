export type TeamMember = {
  name: string;
  studentId?: string;
  role: string;
  githubUrl?: string;
  scope: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "NGUYỄN THỊ BẢO HÂN",
    studentId: "24126067",
    role: "Ý tưởng và nền tảng dự án",
    githubUrl: "https://github.com/baohan24126067",
    scope:
      "Phần 1.2: tên thương hiệu, logo, màu sắc, font, slogan; viết README; tổng hợp GitHub; làm trang đặc trưng theo chủ đề; deploy GitHub Pages; tổng hợp nội dung báo cáo.",
  },
  {
    name: "TRẦN NGUYỄN GIA HÂN",
    studentId: "24126068",
    role: "Đăng nhập, đăng ký, tìm kiếm, liên hệ, about, 404",
    githubUrl: "https://github.com/24126068-arch",
    scope:
      "Phần 2.1 + 2.2: xây dựng trang đăng nhập và đăng ký; kiểm tra hợp lệ email, mật khẩu; tìm kiếm sản phẩm theo tên; hiển thị kết quả phù hợp; xây dựng trang liên hệ, giới thiệu nhóm và lỗi 404.",
  },
  {
    name: "LÊ THỊ HẢI YẾN",
    studentId: "24126286",
    role: "Home + Layout + Responsive",
    scope:
      "Phần 2.2: xây dựng layout chung với container, grid, flex; code hoàn chỉnh trang Home theo Figma; làm responsive mobile, tablet, desktop; điều chỉnh số cột sản phẩm; fix lỗi giao diện; hỗ trợ hoàn thiện hình thức file Word.",
  },
  {
    name: "PHẠM THỊ HỒNG HẬU",
    studentId: "24126070",
    role: "Giỏ hàng và thanh toán",
    githubUrl: "https://github.com/24126070",
    scope:
      "Phần 2.1 + 2.2: xây dựng trang giỏ hàng; thêm, xoá, cập nhật số lượng; tự động tính tổng tiền; xây dựng checkout; form thông tin người dùng; xử lý đặt hàng; quản lý dữ liệu giỏ hàng bằng state management.",
  },
  {
    name: "XUÂN SINH",
    role: "UI/UX + Figma",
    scope:
      "Thiết kế Figma tổng thể; chốt màu chủ đạo xanh - trắng, màu các nút, font chữ, cỡ chữ; chia sẻ file để cả nhóm đồng bộ giao diện và bám đúng style khi code.",
  },
  {
    name: "THANH NGÂN",
    role: "Danh sách sản phẩm",
    scope:
      "Phần 2.1 + 2.2: xây dựng trang danh sách sản phẩm theo Figma; hiển thị lưới hình ảnh, tên, giá; lọc theo giá và loại; sắp xếp tăng giảm; phân trang hoặc cuộn vô hạn; quản lý dữ liệu sản phẩm bằng file JSON.",
  },
  {
    name: "BÍCH SƠN",
    role: "Chi tiết sản phẩm",
    scope:
      "Phần 2.1 + 2.2: xây dựng trang chi tiết sản phẩm; gallery ảnh; hiển thị tên, giá, mô tả; thông số kỹ thuật và hướng dẫn sử dụng; chức năng thêm vào giỏ hàng; sản phẩm liên quan.",
  },
];
