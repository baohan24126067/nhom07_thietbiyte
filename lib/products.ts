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
    name: "Máy massage xung điện trị liệu Omron HV-F013",
    slug: "may-massage-omron-hv-f013",
    price: 1200000,
    unit: "Hộp",
    category: "Thiết bị hỗ trợ trị liệu",
    accent: "#8caecc",
    imagePath: "/assets/images/product-1.jpg",
    imageAlt: "Máy massage xung điện Omron HV-F013",
    description:
      "Thiết bị trị liệu xung điện nhỏ gọn, phù hợp chăm sóc cơ bắp và phục hồi tại nhà.",
    shortDescription: "Máy massage xung điện gọn nhẹ hỗ trợ giảm đau cơ và khớp.",
    rating: 4.8,
    reviewCount: 128,
    tags: ["massage", "trị liệu", "omron"],
    specs: [
      { label: "Thương hiệu", value: "Omron" },
      { label: "Loại", value: "Thiết bị massage xung điện" },
      { label: "Phù hợp", value: "Gia đình, người đau cơ khớp" },
      { label: "Bảo hành", value: "24 tháng" },
    ],
  },
  {
    id: "greentec-mask",
    name: "Mặt nạ xông khí dung Greentec nebulizer mask size M",
    slug: "mat-na-khi-dung-greentec-mask-size-m",
    price: 21000,
    unit: "Cái",
    category: "Phụ kiện khí dung",
    accent: "#85e6f4",
    imagePath: "/assets/images/product-2.jpg",
    imageAlt: "Mặt nạ xông khí dung Greentec size M",
    description:
      "Mặt nạ khí dung chất liệu mềm, bám ôm tốt, dùng kèm máy xông cho cả người lớn.",
    shortDescription: "Phụ kiện khí dung ôm mặt, chất liệu mềm và dễ vệ sinh.",
    rating: 4.6,
    reviewCount: 52,
    tags: ["khí dung", "phụ kiện", "greentec"],
    specs: [
      { label: "Kích cỡ", value: "Size M" },
      { label: "Chất liệu", value: "Nhựa y tế mềm" },
      { label: "Phù hợp", value: "Người lớn" },
      { label: "Đóng gói", value: "1 cái / túi" },
    ],
  },
  {
    id: "pic-insupen",
    name: "Đầu kim tiểu đường 33G x 4mm Pic Insupen",
    slug: "dau-kim-tieu-duong-pic-insupen-33g-4mm",
    price: 250000,
    unit: "Hộp",
    category: "Chăm sóc tiểu đường",
    accent: "#f5ca5e",
    imagePath: "/assets/images/product-3.jpg",
    imageAlt: "Đầu kim tiểu đường Pic Insupen 33G x 4mm",
    description:
      "Đầu kim vô trùng siêu mảnh, giảm đau khi sử dụng và tương thích với nhiều bút tiêm insulin.",
    shortDescription: "Đầu kim vô trùng siêu mảnh cho người dùng insulin mỗi ngày.",
    rating: 4.9,
    reviewCount: 93,
    tags: ["tiểu đường", "insulin", "pic"],
    specs: [
      { label: "Kích cỡ kim", value: "33G x 4mm" },
      { label: "Ứng dụng", value: "Bút tiêm insulin" },
      { label: "Đặc điểm", value: "Siêu mảnh, giảm đau" },
      { label: "Đóng gói", value: "100 kim / hộp" },
    ],
  },
  {
    id: "yuwell-ye610d",
    name: "Máy đo huyết áp bắp tay Yuwell YE610D",
    slug: "may-do-huyet-ap-yuwell-ye610d",
    price: 699000,
    unit: "Hộp",
    category: "Máy đo huyết áp",
    accent: "#d7dfe7",
    imagePath: "/assets/images/product-4.jpg",
    imageAlt: "Máy đo huyết áp bắp tay Yuwell YE610D",
    description:
      "Máy đo huyết áp điện tử có màn hình lớn, ghi nhớ kết quả và cảnh báo nhịp tim bất thường.",
    shortDescription: "Máy đo huyết áp điện tử màn hình lớn, dễ dùng cho gia đình.",
    rating: 4.7,
    reviewCount: 184,
    tags: ["huyết áp", "yuwell", "điện tử"],
    specs: [
      { label: "Vị trí đo", value: "Bắp tay" },
      { label: "Màn hình", value: "LCD lớn" },
      { label: "Tính năng", value: "Nhớ kết quả, cảnh báo nhịp tim" },
      { label: "Nguồn", value: "Pin / Adapter" },
    ],
  },
  {
    id: "infrared-nc1",
    name: "Nhiệt kế hồng ngoại đo trán Yuwell YT-1C",
    slug: "nhiet-ke-hong-ngoai-yuwell-yt1c",
    price: 501500,
    unit: "Hộp",
    category: "Nhiệt kế",
    accent: "#dfe7ee",
    imagePath: "/assets/images/product-5.jpg",
    imageAlt: "Nhiệt kế hồng ngoại Yuwell YT-1C",
    description:
      "Nhiệt kế không chạm cho kết quả nhanh, phù hợp gia đình có trẻ nhỏ và người lớn tuổi.",
    shortDescription: "Nhiệt kế hồng ngoại đo nhanh, không chạm, dùng thuận tiện tại nhà.",
    rating: 4.6,
    reviewCount: 76,
    tags: ["nhiệt kế", "hồng ngoại", "yuwell"],
    specs: [
      { label: "Kiểu đo", value: "Không chạm" },
      { label: "Thời gian trả kết quả", value: "1 giây" },
      { label: "Đối tượng", value: "Trẻ em, người lớn" },
      { label: "Nguồn", value: "Pin AAA" },
    ],
  },
  {
    id: "lancet-medi",
    name: "Kim lấy máu Lancet Medicleen BL-28",
    slug: "kim-lay-mau-lancet-medicleen-bl28",
    price: 32000,
    unit: "Hộp",
    category: "Tiêu hao y tế",
    accent: "#8ea8d2",
    imagePath: "/assets/images/product-6.jpg",
    imageAlt: "Kim lấy máu Lancet Medicleen BL-28",
    description:
      "Kim lấy máu vô trùng sử dụng một lần, hỗ trợ lấy mẫu nhanh và hạn chế đau rát.",
    shortDescription: "Kim lấy máu dùng một lần, hỗ trợ lấy mẫu nhanh và an toàn.",
    rating: 4.5,
    reviewCount: 41,
    tags: ["lancet", "lấy máu", "tiêu hao"],
    specs: [
      { label: "Chuẩn kim", value: "BL-28" },
      { label: "Mục đích", value: "Lấy mẫu máu mao mạch" },
      { label: "Đặc điểm", value: "Vô trùng, dùng một lần" },
      { label: "Đóng gói", value: "100 chiếc / hộp" },
    ],
  },
];

export const featuredProductIds = [
  "omron-hvf013",
  "greentec-mask",
  "pic-insupen",
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

  if (!currentProduct) {
    return [];
  }

  return products
    .filter(
      (product) =>
        product.id !== productId &&
        (product.category === currentProduct.category ||
          product.tags.some((tag) => currentProduct.tags.includes(tag))),
    )
    .slice(0, 3);
}
