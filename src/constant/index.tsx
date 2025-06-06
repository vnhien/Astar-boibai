export type Team = "BOD" | "BO" | "Tech" | "Marketing" | "Design";

export const ListTeam: { value: Team; title: string }[] = [
  {
    value: "BOD",
    title: "BOD",
  },
  {
    value: "BO",
    title: "BO",
  },
  {
    value: "Tech",
    title: "Tech",
  },
  {
    value: "Marketing",
    title: "Marketing ",
  },
  {
    value: "Design",
    title: "Design ",
  },
];

export type CardContent = { content: string; suggestion: string; cardName: string };

export const cardConfig: {
  [team in Team]: CardContent[];
} = {
  BOD: [
    {
      cardName: "Destiny Meeting",
      content:
        "Cuộc họp hôm nay có thể thay đổi vận mệnh công ty… hoặc đơn giản là kéo dài không hồi kết.",
      suggestion: "Mang tinh thần thoải mái và một nụ cười tự tin.",
    },
    {
      cardName: "Secret Email",
      content:
        "Thử thách lớn nhất hôm nay có thể không đến từ thị trường mà từ hộp thư đến của sếp.",
      suggestion: "Hôm nay lên mạng thế là đủ rồi.",
    },
    {
      cardName: "Ping Storm",
      content: "Hôm nay sẽ là một ngày bận rộn vì ai cũng ping sếp trong group chat.",
      suggestion: "Hãy tận hưởng 1 ngày làm người nổi tiếng.",
    },
    {
      cardName: "Recharge Energy",
      content: "Sếp đừng quên lấy 1 tách coffee để tỉnh táo duyệt 7749 idea từ team nhé!",
      suggestion: "100% cafein, không đá, không đường.",
    },
    {
      cardName: "Zooo Zoooo",
      content: "Thời tiết tuyệt vời vô cùng để tối nhậu một bữa!",
      suggestion: "Hãy là nhà đầu tư thông tin cho chính các nhân sự của mình.",
    },
  ],
  BO: [
    {
      cardName: "The Coming",
      content:
        "Ứng viên bảo “Em chắc chắn đi phỏng vấn”, và rồi vũ trụ cho bạn một buổi chờ trong cô đơn.",
      suggestion: "Hãy tin vào vũ trụ.",
    },
    {
      cardName: "The Request Loop",
      content:
        "Bạn sẽ nhận 5 đơn xin nghỉ, 2 đơn xin đổi lịch, và 1 tin nhắn: “Chị ơi em quên chấm công!”.",
      suggestion: "Hãy thiền, tâm thanh tịnh, tránh khẩu nghiệp nhé",
    },
    {
      cardName: "Where is My Lương?",
      content:
        "Hôm nay sẽ có 3 người hỏi bạn lương về chưa, dù chưa đến ngày trả. Vũ trụ thử thách sự kiên nhẫn của bạn.",
      suggestion: "Hãy thiền, tâm thanh tịnh, tránh khẩu nghiệp nhé.",
    },
    {
      cardName: "The Eternal Re-Explain",
      content:
        "Bạn sẽ phải giải thích lại một quy trình đã dán trên bảng thông báo 3 tháng nay, bằng biểu cảm như mới kể lần đầu.",
      suggestion: "Hãy thiền, tâm thanh tịnh, tránh khẩu nghiệp nhé.",
    },
    {
      cardName: "Deja Vu",
      content: "Bạn sẽ đọc một câu thần chú cổ xưa: 'Sao tiền thực tế không bằng tiền trên sổ.",
      suggestion: "Tiền vẫn vậy chỉ là mình chưa nhìn thấy thôi, hãy tin là như vậy.",
    },
  ],
  Tech: [
    {
      cardName: "Demo Day",
      content: "Code chạy ngon... cho đến khi bạn bấm chia sẻ màn hình.",
      suggestion: "Đó là tình năng",
    },
    {
      cardName: "Unexpected Gift",
      content: "Một bug nhỏ hôm nay có thể dẫn bạn vào chuỗi thiên định kéo dài 8 tiếng.",
      suggestion: "Trốn làm là một ý kiến hay",
    },
    {
      cardName: "Getting Older",
      content: "Thẳng cái lưng lên. Cột sống của bạn có thể là 80 tuổi rồi!",
      suggestion: "Ở nhà nghỉ ngơi đi.",
    },
    {
      cardName: "Bug By Yourself",
      content: "AI không fix bug dùm bạn được đâu. Tự lập lên nào.",
      suggestion: "Nếu không fix được, hãy… tắt máy tính. Không có task – không có áp lực.",
    },
    {
      cardName: "The Magic",
      content: "Chẳng phải phép màu, mà sao server đứng yên....",
      suggestion:
        "Đừng vui mừng quá sớm. Khi server đứng yên, hoặc là vì code ngon… hoặc là vì nó chết hẳn.",
    },
  ],
  Marketing: [
    {
      cardName: "Chives Chives Chives",
      content:
        'Hôm nay sẽ là ngày "lạnh" hơn bao giờ hết, hãy chuẩn bị tinh thần để đón nhận - "Sliver"!',
      suggestion: "Bạn có thể lựa chọn đi về hoặc mua thêm 1 chiếc chăn ấm áp.",
    },
    {
      cardName: "The Ghost Campaign",
      content:
        "Hôm nay bạn chạy một campaign cực tâm huyết... chỉ có điều không ai biết. Kể cả sếp. Vũ trụ đang thử lòng bạn.",
      suggestion: "Trời biết, đất biết, bạn biết thế là nhiều rồi",
    },
    {
      cardName: "The Future",
      content: "Một ý tưởng về slogan đỉnh cao sẽ đến, nhưng phải mất 3 đời planner mới hiểu.",
      suggestion: "Hãy chuẩn bị, để 3 đời sau của bạn vẫn giải thích được cho planner.",
    },
    {
      cardName: "GM Or Goodbye",
      content: 'Đăng "GM" hôm nay nếu không muốn bị followers từ bỏ!',
      suggestion:
        "Đừng đánh giá thấp sức mạnh của một chiếc “GM” đúng lúc. Nó không chỉ là chào buổi sáng, mà còn là tín hiệu: “Tôi vẫn còn sống và đáng follow!”",
    },
    {
      cardName: "Seeding To The Void",
      content: "Hãy cứ seeding và tin rằng user sẽ trả lời bạn.",
      suggestion: "Có thể hôm nay họ seen thôi, biết đâu mai họ vẫn seen tiếp.",
    },
  ],
  Design: [
    {
      cardName: "Recall From The Past",
      content: "Hôm nay bạn sẽ tìm được đúng cái font bạn quên tên từ tháng trước!",
      suggestion: "Hỏi chị Google, hỏi anh em chiến hữu sẽ giúp bạn tìm được đáp án trong tíc tắc.",
    },
    {
      cardName: "Colors In Multi-Verse",
      content: 'Designer nói "màu này đẹp" là chân lý. Đừng để feedback phá vỡ hòa bình ở A-Star.',
      suggestion: 'Cặp lại thông điệp hôm nay và đưa nó cho người feedback "màu này xấu"!',
    },
    {
      cardName: "Just Listen - Don't Do",
      content: "Bạn sẽ sửa đến lần thứ 8... rồi về lại version 1. Bình thường thôi... Hẹ Hẹ",
      suggestion:
        "Kiên nhẫn mà làm bạn ơi! Có người sửa logo đến lần thứ 20 còn quay lại option 1 kìa =)))",
    },
    {
      cardName: "Unknown Artist",
      content: 'Dù không ai nhớ tên bạn, nhưng mọi người nhớ "bộ visual đẹp xỉu".',
      suggestion: "Tên có thể quên nhưng xiền công thì phải đòi nhé.",
    },
    {
      cardName: "Ancestors Said",
      content:
        "Tăng năng lượng tâm linh hôm nay vô cùng lớn. Hãy cứ des theo tổ tiên mách bảo thôi!",
      suggestion: "Mở Photoshop lên, bật nhạc remix giật giật và để “lời tổ tiên” dẫn dắt bạn.",
    },
  ],
};
