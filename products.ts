export type Product = {
  id: string;
  name: string;
  price: string;
  unit: string;

  image: string;
  images: string[];

  desc: string[];
  moTa: string;
  congDung: string;
  cachDung: string;
  luuY: string;
  baoQuan: string;
};

export const products: Product[] = [
  {
    id: "massage-omron",
    name: "Máy massage xung điện trị liệu Omron HV-F013 giúp giảm đau cơ và khớp",
    price: "1.200.000đ",
    unit: "Hộp",
    image: "/image/omron_main.webp",
    images: [
      "/image/omron_1.webp",
      "/image/omron_2.webp",
      "/image/omron_3.webp",
      "/image/omron_4.webp",
    ],
    desc: [
      "Công nghệ TENS giảm đau hiệu quả",
      "5 chế độ trị liệu chuyên sâu",
      "10 mức cường độ linh hoạt",
      "Thông số kỹ thuật:",
      "Công nghệ: TENS",
      "Số chế độ: 5",
      "Mức cường độ: 10 mức",
      "Nguồn điện: Pin AAA",
    ],
    moTa: "Omron HV-F013 là giải pháp chăm sóc cơ xương khớp không xâm lấn, phù hợp với người thường xuyên đau mỏi, chơi thể thao, làm việc văn phòng hoặc người lớn tuổi, giúp thư giãn cơ, cải thiện lưu thông máu và tăng chất lượng cuộc sống một cách tự nhiên, an toàn.",
    congDung: 
        `Máy xung điện trị liệu Omron HV-F013 sử dụng công nghệ TENS (xung điện trị liệu kích thích thần kinh), điều trị không dùng thuốc được chứng minh lâm sàng giúp."
        Chặn cơn đau.
        Kích hoạt giải phóng endorphin như thuốc giảm đau tự nhiên.
        Cải thiện lưu thông máu kết quả của sự co cơ lặp đi lặp lại và thư giãn cơ bắp.`,
    cachDung: "Dán miếng pad lên vùng cần trị liệu và chọn chế độ.",
    luuY: 
        `Không sử dụng với một thiết bị y tế được cấy ghép hoặc gán vào, hoặc trên trẻ em, người mang thai, người không có khả năng biểu lộ cảm xúc hoặc người không thể tự vận hành được máy này
        Không sử dụng trên đầu, mặt, miệng, cổ, cổ họng, vết thương hở, vùng da phát ban, nổi mụn, vùng thương tổn bị ung thư hoặc vùng da không có cảm giác bình thường.`,
    baoQuan: "Bảo quản nơi khô ráo, tránh nhiệt độ cao.",
  },

  {
    id: "mask-nebulizer",
    name: "Mặt nạ xông khí dung Greatmed size M",
    price: "21.000đ",
    unit: "Cái",
    image: "/image/greatmed_main.webp",
    images: [
      "/image/greatmed_1.webp",
      "/image/greatmed_2.webp",
    ],
    desc: [
      "Chất liệu an toàn",
      "Thiết kế vừa vặn khuôn mặt",
      "Dễ vệ sinh",

    ],
    moTa: "Mặt nạ xông khí dung Aerosol Mask Greetmed size M là dụng cụ giúp bệnh nhân hấp thu được lượng lớn dung dịch xông một cách hiệu quả và dễ dàng nhất. Sản phẩm có điều chỉnh chốt ở mũi bảo đảm sự thoải mái nhất cho bệnh nhân. Thiết kế đặc biệt cho điều trị aerosol.",
    congDung: "Mặt nạ xông khí dung Aerosol Mask Greetmed size M giúp bệnh nhân hấp thu được lượng lớn dung dịch xông vào khoang mũi.",
    cachDung: "Dùng theo hướng dẫn của nhân viên y tế hoặc người có chuyên môn.",
    luuY: "Đọc kỹ hướng dẫn sử dụng trước khi dùng. Không dùng chung để tránh lây nhiễm.",
    baoQuan: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp từ mặt trời. Để xa tầm tay trẻ em.",
  },

  {
    id: "insulin-pen",
    name: "Kim tiêm tiểu đường 32G x 4mm Pic Insupen",
    price: "250.000đ",
    unit: "Hộp",
    image: "/image/DSC_main.webp",
    images: [
      "/image/DSC_1.webp",
      "/image/DSC_2.webp",
      "/image/DSC_3.webp",
      "/image/DSC_4.webp",
    ],
    desc: [
      "Đầu kim siêu mảnh",
      "Ít gây đau",
      "Dùng một lần an toàn",
      "Thông số kỹ thuật:",
      "Kích thước: 33G x 4mm",
      "Đóng gói: Hộp 100 kim",
      "Chất liệu: Thép không gỉ",
    ],
    moTa: "Đầu kim tiểu đường Insupen được trang bị kim Pic, là kết quả của “trải nghiệm indolor®” (công nghệ không đau). Đường kính ngoài giảm, thành mỏng hơn và xử lý bôi trơn cho phép đầu kim tiểu đường Insupen thực hiện thao tác tiêm thoải mái, giảm đau.",
    congDung: "Đầu kim tiểu đường Insupen được lắp cùng bút tiêm insulin dùng cho người bệnh tiểu đường.",
    cachDung: `Trước mỗi lần tiêm, hãy đảm bảo thuốc chảy ra đúng cách. Luôn giữ một chiếc kim bút dự phòng để thay thế.
                Sử dụng kỹ thuật được bác sĩ khuyên dùng để kiểm soát. Sau khi đưa bút vào, nhấn hết nút tiêm xuống, cẩn thận không làm thay đổi góc của bút. Nếu sau khi rút kim tiêm ra khỏi da, bạn nhận thấy thuốc nhỏ giọt, hãy giữ kim đâm lâu hơn vào lần tiếp theo với liều lượng như cũ.
                Sau khi tiêm, rút ​​kim ra khỏi bút và vứt bỏ vào thùng chứa thích hợp, tuân thủ các quy định và pháp luật hiện hành.
                Để giảm đau, hãy sử dụng kim mới, ngắn, cỡ nòng nhỏ và luôn làm theo hướng dẫn của bác sĩ.`,
    luuY: `Kiểm tra hạn sử dụng của thiết bị. Không sử dụng nếu hết hạn.
            Kiểm tra tính tương thích giữa kim bút và bút dùng để truyền thuốc, xem xét thông tin trên bao bì.
            Luôn lắp kim mới trước mỗi lần tiêm và vứt bỏ kim sau đó.
            Trên thực tế, không bao giờ cất bút có kim gắn sẵn vì điều này sẽ để lại đường dẫn thông tin liên lạc giữa hộp mực và bên ngoài.`,
    baoQuan: "Để nơi sạch sẽ, khô ráo, thoáng mát.",
  },

  {
    id: "yuwell-ye610d",
    name: "Máy đo huyết áp bắp tay Yuwell YE610D",
    price: "699.000đ",
    unit: "Hộp",
    image: "/image/TUK_1.webp",
    images: [
      "/image/TUK_1.webp",
      "/image/TUK_2.webp",
      "/image/TUK_3.webp",
    ],
    desc: [
      "Đo nhanh và chính xác",
      "Màn hình lớn dễ đọc",
      "Tự động hoàn toàn",
      "Thông số kỹ thuật:",
      "Dải đo: 0 - 299 mmHg",
      "Màn hình: LCD",
      "Nguồn: Pin/Adapter",
    ],
    moTa: "Máy đo huyết áp điện tử bắp tay Yuwell YE610D dễ dàng kiểm tra huyết áp chỉ với 1 nút bấm, thao tác đơn giản, cho kết quả chính xác. Sản phẩm cho chỉ số huyết áp trung bình trong 3 lần đo, bộ nhớ lưu trữ đến 80 lần đo, giúp kiểm soát sức khỏe hiệu quả hơn.",
    congDung: "Máy đo huyết áp điện tử bắp tay Yuwell YE610D được dùng để đo huyết áp tâm thu, tâm trương và nhịp tim.",
    cachDung: "Đeo vòng bít và bấm nút đo.",
    luuY: 
        `Ngồi yên khi đo.
        Ngồi yên 5 phút trước khi đo để đảm bảo độ chính xác.
        Không đo huyết áp khi đang đứng, đi lại hoặc cơ thể bị gò bó.
        Không đo huyết áp sau khi hút thuốc, uống rượu bia hoặc cà phê, trà.
        Không đo huyết áp sau khi chơi thể thao hoặc tắm.`,
    baoQuan: "Nơi khô ráo, thoáng mát.",
  },

  {
    id: "yuwell-yt-1c",
    name: "Nhiệt kế hồng ngoại Yuwell YT-1C",
    price: "501.500đ",
    unit: "Hộp",
    image: "/image/NKHN_main.webp",
    images: [
      "/image/NKHN_1.webp",
      "/image/NKHN_2.webp",
      "/image/NKHN_3.webp",
    ],
    desc: [
      "Đo nhanh 1 giây",
      "Không tiếp xúc",
      "An toàn cho trẻ em",
    ],
    moTa: "Nhiệt kế hồng ngoại Yuwell YT-1C là thiết bị đo nhiệt độ không tiếp xúc, sử dụng công nghệ cảm biến hồng ngoại tiên tiến cho kết quả nhanh chỉ sau chưa đến 1 giây. Với tính năng cảnh báo sốt bằng âm thanh và đèn nền đổi màu, YT-1C giúp phát hiện sớm các dấu hiệu bất thường về thân nhiệt.",
    congDung: "Nhiệt kế hồng ngoại Yuwell YT-1C được dùng để đo nhiệt độ trán của người và nhiệt độ môi trường xung quanh.",
    cachDung: 
        `Nhiệt kế đi kèm 2 viên pin kiềm AAA 1.5V. Vui lòng tiến hành theo các bước sau để lắp pin vào máy:
        Bước 1: Trượt nắp pin xuống theo hướng mũi tên.
        Bước 2: Mở nắp đậy hộp chứa pin.
        Bước 3: Lắp pin vào khay chứa, lưu ý lắp đúng cực dương (+) và cực âm (-) theo ký hiệu trên thiết bị.
        Bước 4: Đậy nắp hộp chứa pin.
        Bước 5: Ở trạng thái khởi động, giữ nút tắt tiếng trong 2 giây, giá trị hiển thị sẽ nhấp nháy, sau đó nhấn nút tắt tiếng một lần để chuyển đổi giữa đo nhiệt độ cơ thể và đo nhiệt độ vật thể. Nhấn nút Bật nguồn/Đo để xác nhận.
        Bước 6: Trong quá trình đo, nhấn nút tắt tiếng để bật chế độ im lặng. Nhấn lại nút tắt tiếng để trở lại chế độ bình thường.`,
    luuY: "Không đo khi trán ướt.",
    baoQuan: "Tránh ánh nắng trực tiếp.",
  },

  {
    id: "lancet-medicleen",
    name: "Kim lấy máu Lancet Medicleen BL-28",
    price: "32.000đ",
    unit: "Hộp",
    image: "/image/KLM_main.webp",
    images: [
      "/image/NKHN_1.webp",
      "/image/NKHN_2.webp",
      "/image/NKHN_3.webp",
    ],
    desc: [
      "Đầu kim vát ba cạnh, ít đau",
      "Tiệt trùng sẵn",
      "Dùng 1 lần",
    ],
    moTa: "Kim lấy máu Lancet Medicleen BL-28G là kim lấy máu loại đầu vặn chất lượng, đầu vát ba cạnh giúp lấy mẫu máu ít gây đau. Kim được lắp vào bút lấy máu để chích lấy máu, giúp kiểm tra nhanh các chỉ số cụ thể. Sản phẩm được dùng cho máy đo đường huyết thương hiệu Easy Max, Nipro Premier Alpha và máy đo 5 in 1 FaCare+ FC-M168.",
    congDung: "Dùng để lấy lượng máu nhỏ bằng cách chích vào da.",
    cachDung: 
        `Dùng với bút lấy máu.
        Cho kim lancet vào bút lấy máu và đóng nắp bảo vệ của bút.
        Đọc HDSD bút lấy máu.
        Sau khi dùng, bỏ kim lancet vào thùng rác chứa chất thải y tế. Tương thích giữa kim lancet và hầu hết các dòng bút lấy máu khác.`,
    luuY: "Không dùng kim lancet mà đầu bảo vệ bị mất hoặc bị lỏng sau khi lấy ra khỏi túi đựng. Cẩn thận khi dùng kim lancet đã gỡ khỏi đầu bảo vệ.",
    baoQuan: "Giữ trong bao bì kín.",
  },

  {
    id: "kim-luon-braun",
    name: "Kim luồn tĩnh mạch Braun 22G",
    price: "19.000đ",
    unit: "Cái",
    image: "/image/Braun_1.webp",
    images: [
      "/image/Braun_1.webp",
    ],
    desc: [
      "Chất lượng cao",
      "An toàn",
      "Dễ sử dụng",
    ],
    moTa: "Kim luồn 22 Braun sản phẩm mang thương hiệu uy tín đạt tiêu chuẩn chất lượng của bộ y tế. Thiết bị không thể thiếu trong điều trị bệnh giúp dịch truyền, thuốc, chất dinh dưỡng có thể nhanh chóng được đưa vào cơ thể, mang lại hiệu quả cũng nhanh hơn.",
    congDung: "Truyền dịch trong y tế.",
    cachDung: "Do nhân viên y tế thực hiện.",
    luuY: "Không tự ý sử dụng.",
    baoQuan: "Giữ vô trùng.",
  },

  {
    id: "accu-chek",
    name: "Máy đo đường huyết Accu Chek Instant",
    price: "850.000đ",
    unit: "Hộp",
    image: "/image/Accu_main.webp",
    images: [
      "/image/Accu_1.webp",
      "/image/Accu_2.webp",
    ],
    desc: [
      "Đo nhanh",
      "Chính xác cao",
      "Dễ sử dụng",
    ],
    moTa: "Máy đo đường huyết Accu-Chek Instant được dùng để định lượng nồng độ đường trong máu mao mạch toàn phần tươi lấy từ đầu ngón tay, lòng bàn tay, cẳng tay và bắp tay, hỗ trợ theo dõi và kiểm soát đường huyết hiệu quả. Sản phẩm nổi bật với khả năng kết nối Bluetooth, cho phép lưu trữ và quản lý dữ liệu đo lường dễ dàng qua ứng dụng trên điện thoại thông minh.",
    congDung: "Theo dõi đường huyết tại nhà.",
    cachDung: "Sử dụng que thử theo hướng dẫn.",
    luuY: "Không dùng que quá hạn.",
    baoQuan: "Tránh ẩm.",
  },

  {
    id: "day-truyen-dich",
    name: "Dây truyền dịch kim bướm Creatmed 22G",
    price: "5.000đ",
    unit: "Cái",
    image: "/image/DTD_main.webp",
    images: [
      "/image/DTD_1.webp",
      "/image/DTD_2.webp",
      "/image/DTD_3.webp",
    ],
    desc: [
      "Thiết kế linh hoạt",
      "Dễ sử dụng",
      "An toàn",
    ],
    moTa: "Dây truyền dịch kim cánh bướm Greetmed với thành phần từ nhựa PVC mềm, trong suốt, không chứa chất gây độc, gây sốt. Vật liệu kết cấu kim truyền chắc chắn, không bị gãy trong điều kiện sử dụng bình thường.",
    congDung: "Truyền dịch hoặc lấy máu.",
    cachDung: "Sử dụng trong môi trường y tế.",
    luuY: "Không tái sử dụng.",
    baoQuan: "Giữ vô trùng.",
  },
];