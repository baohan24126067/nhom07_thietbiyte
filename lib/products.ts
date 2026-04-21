export type Product = {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  accent: string;
  imageStyle: "box" | "slim" | "kit" | "device";
  description: string;
};

export const products: Product[] = [
  {
    id: "omron-hvf013",
    name: "Máy massage xung điện trị liệu Omron HV-F013",
    price: 1200000,
    unit: "Hộp",
    category: "Thiết bị hỗ trợ trị liệu",
    accent: "#8caecc",
    imageStyle: "box",
    description:
      "Thiết bị trị liệu xung điện nhỏ gọn, phù hợp chăm sóc cơ bắp và phục hồi tại nhà.",
  },
  {
    id: "greentec-mask",
    name: "Mặt nạ xông khí dung Greentec nebulizer mask size M",
    price: 21000,
    unit: "Cái",
    category: "Phụ kiện khí dung",
    accent: "#85e6f4",
    imageStyle: "slim",
    description:
      "Mặt nạ khí dung chất liệu mềm, bám ôm tốt, dùng kèm máy xông cho cả người lớn.",
  },
  {
    id: "pic-insupen",
    name: "Đầu kim tiểu đường 33G x 4mm Pic Insupen",
    price: 250000,
    unit: "Hộp",
    category: "Chăm sóc tiểu đường",
    accent: "#f5ca5e",
    imageStyle: "kit",
    description:
      "Đầu kim vô trùng siêu mảnh, giảm đau khi sử dụng và tương thích với nhiều bút tiêm insulin.",
  },
  {
    id: "yuwell-ye610d",
    name: "Máy đo huyết áp bắp tay Yuwell YE610D",
    price: 699000,
    unit: "Hộp",
    category: "Máy đo huyết áp",
    accent: "#d7dfe7",
    imageStyle: "device",
    description:
      "Máy đo huyết áp điện tử có màn hình lớn, ghi nhớ kết quả và cảnh báo nhịp tim bất thường.",
  },
  {
    id: "infrared-nc1",
    name: "Nhiệt kế hồng ngoại đo trán Yuwell YT-1C",
    price: 501500,
    unit: "Hộp",
    category: "Nhiệt kế",
    accent: "#dfe7ee",
    imageStyle: "slim",
    description:
      "Nhiệt kế không chạm cho kết quả nhanh, phù hợp gia đình có trẻ nhỏ và người lớn tuổi.",
  },
  {
    id: "lancet-medi",
    name: "Kim lấy máu Lancet Medicleen BL-28",
    price: 32000,
    unit: "Hộp",
    category: "Tiêu hao y tế",
    accent: "#8ea8d2",
    imageStyle: "box",
    description:
      "Kim lấy máu vô trùng sử dụng một lần, hỗ trợ lấy mẫu nhanh và hạn chế đau rát.",
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
