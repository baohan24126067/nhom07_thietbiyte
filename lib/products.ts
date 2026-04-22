export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  unit: string;
  category: string;
  accent: string;
  imagePath: string;
  imageAlt: string;
  description: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  specs: Array<{ label: string; value: string }>;
};

export const products: Product[] = [
  {
    id: "omron-hvf013",
    name: "Máy massage xung điện trị liệu Omron HV-F013 giúp giảm đau cơ và khớp",
    slug: "may-massage-omron-hv-f013",
    price: 1200000,
    unit: "Hộp",
    category: "Thiết bị hỗ trợ trị liệu",
    accent: "#8caecc",
    imagePath: "/assets/images/product-1.jpg",
    imageAlt: "Máy massage xung điện Omron HV-F013",
    description: "Thiết bị trị liệu xung điện nhỏ gọn, phù hợp chăm sóc cơ bắp và phục hồi tại nhà.",
    shortDescription: "Máy massage xung điện gọn nhẹ hỗ trợ giảm đau cơ và khớp.",
    rating: 4.8,
    reviewCount: 128,
    tags: ["massage", "trị liệu", "omron"],
    specs: [{ label: "Thương hiệu", value: "Omron" }, { label: "Bảo hành", value: "24 tháng" }],
  },
  {
    id: "greetmed-mask",
    name: "Mặt nạ xông khí dung Greetmed nebulizer mask size M",
    slug: "mat-na-khi-dung-greetmed-mask-size-m",
    price: 21000,
    unit: "Cái",
    category: "Phụ kiện khí dung",
    accent: "#85e6f4",
    imagePath: "/assets/images/product-2.jpg",
    imageAlt: "Mặt nạ xông khí dung Greetmed size M",
    description: "Mặt nạ khí dung chất liệu mềm, bám ôm tốt, dùng kèm máy xông cho cả người lớn.",
    shortDescription: "Phụ kiện khí dung ôm mặt, chất liệu mềm và dễ vệ sinh.",
    rating: 4.6,
    reviewCount: 52,
    tags: ["khí dung", "phụ kiện", "greetmed"],
    specs: [{ label: "Kích cỡ", value: "Size M" }, { label: "Chất liệu", value: "Nhựa y tế mềm" }],
  },
  {
    id: "pic-insupen",
    name: "Đầu kim tiểu đường 33G x 4mm Pic Insupen original",
    slug: "dau-kim-tieu-duong-pic-insupen-33g-4mm",
    price: 250000,
    unit: "Hộp",
    category: "Chăm sóc tiểu đường",
    accent: "#f5ca5e",
    imagePath: "/assets/images/product-3.jpg",
    imageAlt: "Đầu kim tiểu đường Pic Insupen 33G x 4mm",
    description: "Đầu kim vô trùng siêu mảnh, giảm đau khi sử dụng.",
    shortDescription: "Đầu kim vô trùng siêu mảnh cho người dùng insulin mỗi ngày.",
    rating: 4.9,
    reviewCount: 93,
    tags: ["tiểu đường", "insulin", "pic"],
    specs: [{ label: "Kích cỡ kim", value: "33G x 4mm" }, { label: "Đóng gói", value: "100 kim / hộp" }],
  },
  {
    id: "yuwell-ye610d",
    name: "Máy đo huyết áp bắp tay Yuwell YE610D hỗ trợ đo huyết áp, nhịp tim",
    slug: "may-do-huyet-ap-yuwell-ye610d",
    price: 699000,
    unit: "Hộp",
    category: "Máy đo huyết áp",
    accent: "#d7dfe7",
    imagePath: "/assets/images/product-4.jpg",
    imageAlt: "Máy đo huyết áp bắp tay Yuwell YE610D",
    description: "Máy đo huyết áp điện tử có màn hình lớn, ghi nhớ kết quả.",
    shortDescription: "Máy đo huyết áp điện tử màn hình lớn, dễ dùng cho gia đình.",
    rating: 4.7,
    reviewCount: 184,
    tags: ["huyết áp", "yuwell", "điện tử"],
    specs: [{ label: "Vị trí đo", value: "Bắp tay" }, { label: "Tính năng", value: "Nhớ kết quả" }],
  },
  {
    id: "yuwell-yt1c",
    name: "Nhiệt kế hồng ngoại đo trán Yuwell YT-1C",
    slug: "nhiet-ke-hong-ngoai-yuwell-yt1c",
    price: 501500,
    unit: "Hộp",
    category: "Nhiệt kế",
    accent: "#dfe7ee",
    imagePath: "/assets/images/product-5.jpg",
    imageAlt: "Nhiệt kế hồng ngoại Yuwell YT-1C",
    description: "Nhiệt kế không chạm cho kết quả nhanh.",
    shortDescription: "Nhiệt kế hồng ngoại đo nhanh, không chạm.",
    rating: 4.6,
    reviewCount: 76,
    tags: ["nhiệt kế", "hồng ngoại", "yuwell"],
    specs: [{ label: "Kiểu đo", value: "Không chạm" }, { label: "Thời gian", value: "1 giây" }],
  },
  {
    id: "medicleen-bl28",
    name: "Kim lấy máu Lancet Medicleen BL-28",
    slug: "kim-lay-mau-lancet-medicleen-bl28",
    price: 32000,
    unit: "Hộp",
    category: "Tiêu hao y tế",
    accent: "#8ea8d2",
    imagePath: "/assets/images/product-6.jpg",
    imageAlt: "Kim lấy máu Lancet Medicleen BL-28",
    description: "Kim lấy máu vô trùng sử dụng một lần.",
    shortDescription: "Kim lấy máu dùng một lần.",
    rating: 4.5,
    reviewCount: 41,
    tags: ["lancet", "lấy máu"],
    specs: [{ label: "Chuẩn kim", value: "BL-28" }, { label: "Đóng gói", value: "100 chiếc / hộp" }],
  },
  {
    id: "braun-22g",
    name: "Kim luồn tĩnh mạch Braun 22G hỗ trợ truyền dịch, nước vào cơ thể",
    slug: "kim-luon-tinh-mach-braun-22g",
    price: 19000,
    unit: "Cái",
    category: "Tiêu hao y tế",
    accent: "#e5edf5",
    imagePath: "/assets/images/product-7.jpg",
    imageAlt: "Kim luồn tĩnh mạch Braun 22G",
    description: "Kim luồn tĩnh mạch an toàn, hỗ trợ truyền dịch.",
    shortDescription: "Kim luồn tĩnh mạch hỗ trợ truyền dịch.",
    rating: 4.4,
    reviewCount: 32,
    tags: ["kim luồn", "braun"],
    specs: [{ label: "Kích cỡ", value: "22G" }, { label: "Loại", value: "Vô trùng" }],
  },
  {
    id: "accu-chek-instant",
    name: "Máy đo đường huyết Accu Chek Instant hỗ trợ theo dõi, kiểm soát lượng đường trong máu",
    slug: "may-do-duong-huyet-accu-chek-instant",
    price: 850000,
    unit: "Hộp",
    category: "Chăm sóc tiểu đường",
    accent: "#fefefe",
    imagePath: "/assets/images/product-8.jpg",
    imageAlt: "Máy đo đường huyết Accu Chek Instant",
    description: "Máy đo đường huyết cho kết quả chính xác.",
    shortDescription: "Theo dõi lượng đường huyết nhanh chóng.",
    rating: 4.9,
    reviewCount: 210,
    tags: ["đường huyết", "accu-chek"],
    specs: [{ label: "Thương hiệu", value: "Accu-Chek" }, { label: "Tính năng", value: "Bluetooth" }],
  },
  {
    id: "greetmed-22g",
    name: "Dây truyền dịch kim bướm Greetmed 22G dùng để truyền dịch cho bệnh nhân",
    slug: "day-truyen-dich-greetmed-22g",
    price: 5000,
    unit: "Cái",
    category: "Tiêu hao y tế",
    accent: "#fefefe",
    imagePath: "/assets/images/product-9.jpg",
    imageAlt: "Dây truyền dịch Greetmed 22G",
    description: "Dây truyền dịch kim bướm vô trùng.",
    shortDescription: "Dây truyền dịch cho bệnh nhân.",
    rating: 4.3,
    reviewCount: 15,
    tags: ["truyền dịch", "greetmed"],
    specs: [{ label: "Kích cỡ", value: "22G" }, { label: "Đóng gói", value: "1 cái / túi" }],
  },
];

export const featuredProductIds = [
  "omron-hvf013",
  "greetmed-mask",
  "pic-insupen",
  "yuwell-ye610d",
  "yuwell-yt1c",
  "medicleen-bl28",
  "braun-22g",
  "accu-chek-instant",
  "greetmed-22g",
] as const;

export function getFeaturedProducts() {
  return featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(productId: string) {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  return products
    .filter(
      (product) =>
        product.id !== productId &&
        (product.category === currentProduct.category ||
          product.tags.some((tag) => currentProduct.tags.includes(tag))),
    )
    .slice(0, 3);
}
