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

export type ProductDetailContent = {
  gallery: string[];
  summary: string[];
  description: string;
  uses: string;
  usage: string;
  cautions: string;
  storage: string;
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
  {
    id: "braun-22g",
    name: "Kim luồn tĩnh mạch Braun 22G",
    slug: "kim-luon-tinh-mach-braun-22g",
    price: 19000,
    unit: "Cái",
    category: "Tiêu hao y tế",
    accent: "#dce8f5",
    imagePath: "/assets/images/product-7.jpg",
    imageAlt: "Kim luồn tĩnh mạch Braun 22G",
    description:
      "Kim luồn tĩnh mạch dùng trong hỗ trợ truyền dịch, đảm bảo vô trùng và thao tác thuận tiện.",
    shortDescription: "Kim luồn tĩnh mạch hỗ trợ truyền dịch, nước vào cơ thể.",
    rating: 4.4,
    reviewCount: 32,
    tags: ["kim luồn", "braun", "truyền dịch"],
    specs: [
      { label: "Kích cỡ", value: "22G" },
      { label: "Loại", value: "Vô trùng, dùng một lần" },
      { label: "Ứng dụng", value: "Truyền dịch ngoại vi" },
      { label: "Đóng gói", value: "1 cái / túi" },
    ],
  },
  {
    id: "accu-chek-instant",
    name: "Máy đo đường huyết Accu-Chek Instant",
    slug: "may-do-duong-huyet-accu-chek-instant",
    price: 850000,
    unit: "Hộp",
    category: "Chăm sóc tiểu đường",
    accent: "#d7ecff",
    imagePath: "/assets/images/product-8.jpg",
    imageAlt: "Máy đo đường huyết Accu-Chek Instant",
    description:
      "Máy đo đường huyết màn hình rõ nét, cho kết quả nhanh, hỗ trợ người bệnh theo dõi đường huyết tại nhà.",
    shortDescription: "Máy đo đường huyết tiện dùng để kiểm soát lượng đường trong máu.",
    rating: 4.9,
    reviewCount: 210,
    tags: ["đường huyết", "accu-chek", "tiểu đường"],
    specs: [
      { label: "Thương hiệu", value: "Accu-Chek" },
      { label: "Kết quả", value: "Nhanh, dễ đọc" },
      { label: "Màn hình", value: "LCD lớn" },
      { label: "Tính năng", value: "Theo dõi tại nhà" },
    ],
  },
  {
    id: "greetmed-butterfly-22g",
    name: "Dây truyền dịch kim bướm Greetmed 22G",
    slug: "day-truyen-dich-kim-buom-greetmed-22g",
    price: 5000,
    unit: "Cái",
    category: "Tiêu hao y tế",
    accent: "#eff5fb",
    imagePath: "/assets/images/product-9.jpg",
    imageAlt: "Dây truyền dịch kim bướm Greetmed 22G",
    description:
      "Dây truyền dịch kim bướm vô trùng, thường dùng trong truyền dịch ngắn hạn và lấy ven ngoại vi.",
    shortDescription: "Dây truyền dịch kim bướm dùng để truyền dịch cho bệnh nhân.",
    rating: 4.3,
    reviewCount: 15,
    tags: ["truyền dịch", "greetmed", "kim bướm"],
    specs: [
      { label: "Kích cỡ", value: "22G" },
      { label: "Chất liệu", value: "Nhựa y tế + kim thép" },
      { label: "Đặc điểm", value: "Vô trùng, dùng một lần" },
      { label: "Đóng gói", value: "1 cái / túi" },
    ],
  },
];

export const productDetailContent: Record<string, ProductDetailContent> = {
  "omron-hvf013": {
    gallery: [
      "/omron_main.webp",
      "/omron_1.webp",
      "/omron_2.webp",
      "/omron_3.webp",
      "/omron_4.webp",
    ],
    summary: [
      "Công nghệ TENS giảm đau hiệu quả",
      "5 chế độ trị liệu chuyên sâu",
      "10 mức cường độ linh hoạt",
      "Nguồn điện pin AAA",
    ],
    description:
      "Omron HV-F013 là giải pháp chăm sóc cơ xương khớp không xâm lấn, phù hợp với người thường xuyên đau mỏi, chơi thể thao, làm việc văn phòng hoặc người lớn tuổi. Sản phẩm hỗ trợ thư giãn cơ, cải thiện lưu thông máu và nâng chất lượng chăm sóc sức khỏe tại nhà.",
    uses:
      "Máy xung điện trị liệu sử dụng công nghệ TENS để kích thích thần kinh qua da, hỗ trợ chặn tín hiệu đau, kích hoạt endorphin tự nhiên và cải thiện lưu thông máu nhờ co giãn cơ lặp lại.",
    usage: "Dán miếng pad lên vùng cần trị liệu, chọn chế độ phù hợp và tăng cường độ từ mức thấp.",
    cautions:
      "Không sử dụng với thiết bị y tế cấy ghép, cho trẻ em, người mang thai, vùng đầu mặt cổ, vết thương hở hoặc vùng da mất cảm giác bình thường.",
    storage: "Bảo quản nơi khô ráo, tránh nhiệt độ cao và vệ sinh miếng pad sau khi dùng.",
  },
  "greentec-mask": {
    gallery: ["/greatmed_main.webp", "/greatmed_1.webp", "/greatmed_2.webp"],
    summary: ["Chất liệu an toàn", "Thiết kế vừa vặn khuôn mặt", "Dễ vệ sinh"],
    description:
      "Mặt nạ xông khí dung Greetmed size M giúp người bệnh hấp thu dung dịch xông hiệu quả và dễ dàng hơn. Thiết kế có chốt điều chỉnh ở mũi, tạo cảm giác thoải mái khi dùng aerosol.",
    uses:
      "Dùng kèm máy khí dung để đưa dung dịch xông vào khoang mũi và đường hô hấp theo hướng dẫn chuyên môn.",
    usage: "Lắp mặt nạ vào dây dẫn khí dung, đặt ôm kín vùng mũi miệng và dùng theo chỉ dẫn của nhân viên y tế.",
    cautions: "Không dùng chung để tránh lây nhiễm. Kiểm tra tình trạng mặt nạ trước khi sử dụng.",
    storage: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp và để xa tầm tay trẻ em.",
  },
  "pic-insupen": {
    gallery: ["/DSC_main.webp", "/DSC_1.webp", "/DSC_2.webp", "/DSC_3.webp", "/DSC_4.webp"],
    summary: [
      "Đầu kim siêu mảnh",
      "Ít gây đau",
      "Dùng một lần an toàn",
      "Hộp 100 kim",
    ],
    description:
      "Đầu kim tiểu đường Insupen sử dụng công nghệ giảm đau, đường kính ngoài nhỏ, thành kim mỏng và bề mặt được xử lý bôi trơn để thao tác tiêm thoải mái hơn.",
    uses: "Lắp cùng bút tiêm insulin cho người bệnh tiểu đường.",
    usage:
      "Luôn lắp kim mới trước mỗi lần tiêm, kiểm tra thuốc chảy đúng cách, nhấn hết nút tiêm và giữ kim đủ lâu trước khi rút ra.",
    cautions:
      "Không tái sử dụng kim, không cất bút khi còn gắn kim và bỏ kim sau tiêm vào hộp chứa phù hợp.",
    storage: "Để nơi sạch sẽ, khô ráo, thoáng mát.",
  },
  "yuwell-ye610d": {
    gallery: ["/TUK_1.webp", "/TUK_2.webp", "/TUK_3.webp"],
    summary: ["Đo nhanh và chính xác", "Màn hình lớn dễ đọc", "Tự động hoàn toàn"],
    description:
      "Máy đo huyết áp điện tử bắp tay Yuwell YE610D cho phép kiểm tra huyết áp chỉ với một nút bấm, lưu trữ nhiều kết quả và hỗ trợ theo dõi sức khỏe tại nhà.",
    uses: "Dùng để đo huyết áp tâm thu, huyết áp tâm trương và nhịp tim.",
    usage: "Đeo vòng bít đúng vị trí, ngồi yên và bấm nút đo.",
    cautions:
      "Ngồi nghỉ 5 phút trước khi đo, không đo ngay sau khi vận động, hút thuốc, uống rượu bia, cà phê hoặc trà.",
    storage: "Nơi khô ráo, thoáng mát.",
  },
  "infrared-nc1": {
    gallery: ["/NKHN_main.webp", "/NKHN_1.webp", "/NKHN_2.webp", "/NKHN_3.webp"],
    summary: ["Đo nhanh 1 giây", "Không tiếp xúc", "An toàn cho trẻ em"],
    description:
      "Nhiệt kế hồng ngoại Yuwell YT-1C dùng cảm biến hồng ngoại để đo nhiệt độ không tiếp xúc, có cảnh báo sốt và đèn nền đổi màu.",
    uses: "Dùng để đo nhiệt độ trán người dùng và nhiệt độ môi trường xung quanh.",
    usage:
      "Lắp pin đúng cực, chọn chế độ đo cơ thể hoặc vật thể, đưa nhiệt kế vào vùng trán theo khoảng cách hướng dẫn và bấm đo.",
    cautions: "Không đo khi trán ướt hoặc ngay sau khi vận động mạnh.",
    storage: "Tránh ánh nắng trực tiếp và nơi ẩm.",
  },
  "lancet-medi": {
    gallery: ["/KLM_main.webp", "/KLM_1.webp", "/KLM_2.webp", "/KLM_3.webp", "/KLM_4.webp"],
    summary: ["Đầu kim vát ba cạnh", "Tiệt trùng sẵn", "Dùng một lần"],
    description:
      "Kim lấy máu Lancet Medicleen BL-28G là kim lấy máu đầu vặn, đầu vát ba cạnh giúp lấy mẫu ít đau và thao tác nhanh.",
    uses: "Dùng với bút lấy máu để lấy lượng máu nhỏ phục vụ kiểm tra chỉ số.",
    usage:
      "Lắp kim vào bút lấy máu, đóng nắp bảo vệ, thao tác theo hướng dẫn của bút và bỏ kim vào thùng chứa sau khi dùng.",
    cautions: "Không dùng kim nếu đầu bảo vệ bị mất hoặc lỏng.",
    storage: "Giữ trong bao bì kín.",
  },
  "braun-22g": {
    gallery: ["/Braun_1.webp"],
    summary: ["Chất lượng cao", "Vô trùng", "Dùng trong môi trường y tế"],
    description:
      "Kim luồn tĩnh mạch Braun 22G là thiết bị tiêu hao y tế hỗ trợ truyền dịch, thuốc và dinh dưỡng vào cơ thể.",
    uses: "Dùng trong truyền dịch hoặc điều trị theo chỉ định y tế.",
    usage: "Do nhân viên y tế thực hiện.",
    cautions: "Không tự ý sử dụng tại nhà khi không có chuyên môn.",
    storage: "Giữ vô trùng và bảo quản theo hướng dẫn trên bao bì.",
  },
  "accu-chek-instant": {
    gallery: ["/Accu_main.webp", "/Accu_1.webp", "/Accu_2.webp", "/Accu_3.webp", "/Accu_4.webp"],
    summary: ["Đo nhanh", "Chính xác cao", "Dễ sử dụng", "Có kết nối Bluetooth"],
    description:
      "Máy đo đường huyết Accu-Chek Instant hỗ trợ định lượng đường huyết mao mạch, giúp người bệnh theo dõi và kiểm soát đường huyết hằng ngày.",
    uses: "Theo dõi đường huyết tại nhà theo hướng dẫn chuyên môn.",
    usage: "Sử dụng que thử đúng cách, lấy mẫu máu đầu ngón tay và đọc kết quả trên màn hình.",
    cautions: "Không dùng que thử quá hạn hoặc que thử bị ẩm.",
    storage: "Tránh ẩm, đóng nắp lọ que thử ngay sau khi lấy.",
  },
  "greetmed-butterfly-22g": {
    gallery: ["/DTD_main.webp", "/DTD_1.webp", "/DTD_2.webp", "/DTD_3.webp"],
    summary: ["Thiết kế linh hoạt", "Dễ sử dụng", "Vô trùng dùng một lần"],
    description:
      "Dây truyền dịch kim cánh bướm Greetmed dùng vật liệu nhựa PVC mềm, trong suốt và kim truyền chắc chắn trong điều kiện sử dụng bình thường.",
    uses: "Dùng để truyền dịch hoặc lấy máu trong môi trường y tế.",
    usage: "Sử dụng theo quy trình của nhân viên y tế.",
    cautions: "Không tái sử dụng và không dùng nếu bao bì hở hoặc hư hỏng.",
    storage: "Giữ vô trùng, bảo quản nơi khô ráo.",
  },
};

export const featuredProductIds = [
  "omron-hvf013",
  "greentec-mask",
  "pic-insupen",
  "yuwell-ye610d",
  "infrared-nc1",
  "lancet-medi",
  "braun-22g",
  "accu-chek-instant",
  "greetmed-butterfly-22g",
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

export function getProductDetailContent(productId: string) {
  return productDetailContent[productId];
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
