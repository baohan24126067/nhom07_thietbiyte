export type TeamMember = {
  name: string;
  studentId: string;
  role: string;
  githubUrl?: string;
  scope: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Bảo Hân",
    studentId: "24126067",
    role: "Brand foundation",
    githubUrl: "https://github.com/baohan24126067",
    scope: "Init dự án, shell giao diện, FAQ, README và deploy baseline.",
  },
  {
    name: "Gia Hân",
    studentId: "24126068",
    role: "Account and support pages",
    githubUrl: "https://github.com/24126068-arch",
    scope: "Đăng nhập, tìm kiếm, liên hệ, about và lỗi 404.",
  },
  {
    name: "Hải Yến",
    studentId: "24126069",
    role: "Static web handoff",
    scope: "Bản giao diện tĩnh HTML/CSS/JS và tài liệu tích hợp ban đầu.",
  },
  {
    name: "Hồng Hậu",
    studentId: "24126070",
    role: "Cart and checkout",
    githubUrl: "https://github.com/24126070",
    scope: "Giỏ hàng, thanh toán, trạng thái đơn phía client.",
  },
];
