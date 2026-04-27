export const faqGroups = [
  {
    title: "Mua hàng và tư vấn",
    description:
      "Các câu hỏi thường gặp trước khi chọn thiết bị y tế cho gia đình.",
    items: [
      {
        question: "Tôi nên chọn máy đo huyết áp bắp tay hay cổ tay?",
        answer:
          "Nếu ưu tiên độ ổn định và dễ theo dõi lâu dài, máy đo bắp tay thường phù hợp hơn. Máy cổ tay gọn nhẹ nhưng cần đặt đúng tư thế để đảm bảo sai số thấp.",
      },
      {
        question: "Thiết bị trên website có dùng được cho người lớn tuổi không?",
        answer:
          "Có. Các nhóm sản phẩm trong Medishop ưu tiên giao diện đơn giản, nút rõ ràng và hướng dẫn sử dụng ngắn gọn để người lớn tuổi hoặc người chăm sóc dễ thao tác.",
      },
      {
        question: "Tôi có thể nhờ tư vấn trước khi đặt hàng không?",
        answer:
          "Có. Phần liên hệ của website sẽ được nhóm hoàn thiện để khách hàng gửi nhu cầu, sau đó nhân viên tư vấn lựa chọn thiết bị phù hợp theo mục đích sử dụng tại nhà.",
      },
    ],
  },
  {
    title: "Bảo quản và sử dụng",
    description:
      "Thông tin nhanh giúp người dùng dùng thiết bị đúng cách và tăng tuổi thọ sản phẩm.",
    items: [
      {
        question: "Bao lâu nên vệ sinh máy xông khí dung một lần?",
        answer:
          "Sau mỗi lần sử dụng, người dùng nên vệ sinh mặt nạ, cốc thuốc và ống dẫn theo hướng dẫn của nhà sản xuất để tránh đọng cặn và đảm bảo vệ sinh.",
      },
      {
        question: "Pin của nhiệt kế hồng ngoại có cần thay định kỳ không?",
        answer:
          "Nên kiểm tra pin khi thiết bị báo yếu hoặc khi số đo không ổn định. Nếu lâu ngày không dùng, nên tháo pin để tránh chảy pin làm ảnh hưởng bo mạch.",
      },
      {
        question: "Thiết bị y tế tại nhà nên đặt ở đâu?",
        answer:
          "Nên đặt tại nơi khô ráo, tránh ánh nắng trực tiếp, tránh nguồn nhiệt cao và sắp xếp thành một khu vực riêng để người dùng dễ tìm và kiểm tra định kỳ.",
      },
    ],
  },
  {
    title: "Đơn hàng và hỗ trợ",
    description:
      "Những câu hỏi người dùng thường cần biết sau khi đã chọn được sản phẩm.",
    items: [
      {
        question: "Tôi có thể kiểm tra lại thông tin sản phẩm trước khi thanh toán không?",
        answer:
          "Có. Luồng giỏ hàng và thanh toán của nhóm sẽ hiển thị lại tên sản phẩm, số lượng và tổng tiền trước khi người dùng bấm đặt hàng.",
      },
      {
        question: "Nếu nhận sai sản phẩm thì xử lý thế nào?",
        answer:
          "Khách hàng cần giữ nguyên tình trạng sản phẩm, liên hệ hỗ trợ và cung cấp thông tin đơn hàng. Nhóm sẽ trình bày rõ chính sách đổi trả trong các trang hỗ trợ khách hàng.",
      },
      {
        question: "Website có lưu lịch sử đơn hàng không?",
        answer:
          "Ở phạm vi bài tập hiện tại, nhóm ưu tiên hoàn thiện quy trình đặt hàng cơ bản. Lịch sử đơn hàng là hướng mở rộng có thể phát triển ở các phase sau.",
      },
    ],
  },
  {
    title: "An toàn khi dùng tại nhà",
    description:
      "Các lưu ý cơ bản để người dùng tự kiểm tra thiết bị y tế gia đình trước khi sử dụng.",
    items: [
      {
        question: "Khi nào không nên tự dùng thiết bị y tế tại nhà?",
        answer:
          "Nếu người dùng có triệu chứng nặng, đau bất thường, khó thở, ngất, chảy máu hoặc kết quả đo quá khác thường, nên liên hệ cơ sở y tế thay vì chỉ dựa vào thiết bị tại nhà.",
      },
      {
        question: "Có cần đọc hướng dẫn sử dụng trước mỗi lần dùng không?",
        answer:
          "Nên đọc kỹ hướng dẫn khi mới mua, sau đó lưu lại các bước quan trọng như cách lắp pin, vệ sinh, vị trí đo và cảnh báo lỗi để thao tác ổn định hơn.",
      },
      {
        question: "Làm sao biết thiết bị cần kiểm tra hoặc thay mới?",
        answer:
          "Nếu thiết bị cho kết quả dao động bất thường, có dấu hiệu hỏng vỏ, dây dẫn lỏng, màn hình mờ hoặc pin chảy, người dùng nên ngừng sử dụng và kiểm tra lại.",
      },
    ],
  },
] as const;

export const quickFacts = [
  "FAQ được chọn làm trang đặc trưng theo chủ đề cho phần của Bảo Hân.",
  "Ngôn ngữ giao diện giữ đồng nhất với Home: nền xanh nhạt, khối trắng và CTA xanh dương.",
  "Nội dung ưu tiên tình huống sử dụng thiết bị y tế trong gia đình.",
  "Các câu trả lời chỉ mang tính hỗ trợ thông tin, không thay thế tư vấn y tế chuyên môn.",
] as const;
