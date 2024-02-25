const apple = [
  {
    id: 1,
    ten: "Apple AirTag",
    loai: ["apple"],
    image: "apple/airtag.webp",
    gia: 790000,
    mota: "Apple Airtag - Thiết bị tìm đồ thất lạc của chính Apple \nAirtag là một thiết bị nhỏ được tích hợp công nghệ Bluetooth dùng trong việc tìm kiếm đồ vật, trang thiết bị thất lạc. Dù có nhiều sản phẩm tương tự nhưng phụ kiện nhà thông minh của hãng Apple hứa hẹn sẽ được tích hợp công nghệ sâu hơn, cho người dùng trải nghiệm những hoạt động tuyệt vời hơn nữa của thiết bị.",
  },
  {
    id: 2,
    ten: "Apple Pencil 2023 USB-C chính hãng",
    loai: ["apple"],
    image: "apple/apple-pencil-usb-c-1.webp",
    gia: 2090000,
    mota: "Apple Pencil USB-C được thiết kế để tương thích mượt mà với hầu hết các mẫu iPad hiện nay như: iPad Pro, iPad Air, iPad mini thông qua cổng USB-C tích hợp. Bên cạnh đó, dòng Apple Pencil mới này còn sở hữu độ chính xác tuyệt vời và độ nhạy cao, đem tới sự dễ dàng trong các thao tác như viết, vẽ. Đặc biệt, bút cũng được tích hợp tính năng di chuyển chuột trên các phiên bản iPad Pro dùng chip M2, mang lại sự tiện lợi và độ chính xác cho các tác vụ sáng tạo.",
  },
  {
    id: 3,
    ten: "Cáp sạc Lightning chuẩn MFi UGREEN US199",
    loai: ["apple"],
    image: "apple/cap-sac-lightning-chuan-mfi-ugreen-us199-247x247.jpg",
    gia: 270000,
    mota: "Cáp USB-A To Lightning MFI Ugreen US199 - An toàn tuyệt đối, hiệu suất hoạt động ấn tượng. Cáp USB-A To Lightning MFI Ugreen US199 rất tiện lợi khi sở hữu khả năng tương thích với đa dạng sản phẩm Apple, cũng như hiệu suất hoạt động ấn tượng. Hơn nữa, khi sử dụng dòng dây cáp iPhone này, bạn hoàn toàn không phải lo lắng về tình trạng cháy nổ, hư hỏng thiết bị.",
  },
  {
    id: 4,
    ten: "Dây cáp sạc Lightning đầu type C Ugreen US305 US vuông góc",
    loai: ["apple"],
    image:
      "apple/day-cap-sac-lightning-dau-type-c-ugreen-us305-us-vuong-goc-1m-247x247.png",
    gia: 350000,
    mota: "Dây cáp USB-C to Lightning Ugreen US305 US là sự lựa chọn hoàn hảo cho nhu cầu truyền dữ liệu và sạc nhanh của bạn. Sản phẩm chứng nhận MFi, đảm bảo tính tương thích và an toàn cho các thiết bị iPhone, iPad và iPod của bạn. Với khả năng sạc tối đa 3A và tốc độ truyền dữ liệu lên đến 480Mbps, đây là một sản phẩm đáng tin cậy với đầu cắm hợp kim nhôm bền bỉ. Sở hữu ngay dây cáp này để trải nghiệm sự tiện ích và hiệu suất tối ưu.",
  },
  {
    id: 5,
    ten: "Tai nghe Apple EarPods USB-C MTJY3ZA/A ",
    loai: ["apple"],
    image: "apple/frame_3_3.webp",
    gia: 550000,
    mota: "ĐẶC ĐIỂM NỔI BẬT \nEarPods thiết kế theo hình dạng của tạo cảm giác thoải mái \nTrang bị âm thanh chất lượng cao tông trầm sâu, phong phú \nSử dụng bền bỉ với khả năng chống mồ hôi và chống nước \nTrang bị cổng USB-C tiện lợi kết nối với iPhone mới của Apple",
  },
  {
    id: 23,
    ten: "Tai nghe Bluetooth Apple AirPods Pro 2 2023 USB-C",
    loai: ["apple"],
    image: "apple/group_111_5_.webp",
    gia: 5890000,
    mota: "Airpods Pro 2 Type-C với công nghệ khử tiếng ồn chủ động mang lại khả năng khử ồn lên gấp 2 lần mang lại trải nghiệm nghe - gọi và trải nghiệm âm nhạc ấn tượng. Cùng với đó, điện thoại còn được trang bị công nghệ âm thanh không gian giúp trải nghiệm âm nhạc thêm phần sống động. Airpods Pro 2 Type-C với cổng sạc Type C tiện lợi cùng viên pin mang lại thời gian trải nghiệm lên đến 6 giờ tiện lợi.",
  },
];

const bosac = [
  {
    id: 6,
    ten: "Củ sạc nhanh 65W RoboGaN Mini Ugreen CD361 sạc nhanh 65W, chân dẹt",
    loai: ["bosac"],
    image: "bosac/cu-sac-nhanh-65w-ugreen-15579-robogan-mini-247x247.jpg",
    gia: 799000,
    mota: "Củ sạc nhanh 65W RoboGaN Mini Ugreen CD361 thiết kế hiện đại và dễ thương hình robot, kết hợp giữa tính năng và sự đáng yêu, làm cho nó trở thành phụ kiện lý tưởng cho mọi nhu cầu sạc di động của bạn. Bộ Sạc Đa Năng: Với 2 cổng USB C và 1 cổng USB A, bạn có thể sạc bất kỳ thiết bị nào bạn muốn. Kèm theo nhiều giao thức sạc nhanh, tương thích rộng rãi, như tai nghe, điện thoại, máy tính bảng và MacBook Pro/Air.",
  },
  {
    id: 7,
    ten: "Ổ cắm điện đa năng UGREEN C268 trạm sạc để bàn 65W 2 USB-C, 2 USB-A",
    loai: ["bosac"],
    image: "bosac/o-cam-dien-da-nang-ugreen-c268-chan-cam-eu-247x247.png",
    gia: 1490000,
    mota: "Trạm sạc mạnh mẽ: Với 3 ổ cắm AC, 2 cổng USB-C, 2 cổng USB-A và dây nối nguồn Heavy Duty dài 6 ft (1875W/15A), Dải nguồn Ugreen 65W USB-C cung cấp năng lượng cho tối đa 7 thiết bị cùng một lúc .",
  },
  {
    id: 8,
    ten: "Ổ cắm điện đa năng UGREEN CD270 trạm sạc để bàn 100W, 3 xUSB-C , 1 x USB-A",
    loai: ["bosac"],
    image: "bosac/o-cam-dien-da-nang-ugreen-cd270-247x247.jpg",
    gia: 1990000,
    mota: "Trạm sạc UGREEN CD270 mạnh mẽ: Với 2 ổ cắm AC, 3 cổng USB-C, 1 cổng USB-A và dây nối nguồn Heavy Duty dài 1.8m, Dải nguồn Ugreen 100W USB-C cung cấp năng lượng cho tối đa 6 thiết bị cùng một lúc .Trạm sạc Type C tốc độ cao  100W: Bộ sạc DigiNest Pro USB C cung cấp công suất tốc độ cao 100W cho MacBook Air M2 13 inch",
  },
  {
    id: 9,
    ten: "Sạc nhanh 30W Ugreen RoboGaN Mini CD359",
    loai: ["bosac"],
    image:
      "bosac/sac-nhanh-140w-chan-tron-ugreen-cd289-cong-nghe-gan-trang-1-247x247.jpg",
    gia: 399000,
    mota: "Ugreen RoboGaN không chỉ là một bộ sạc thông thường mà còn là một người bạn công nghệ đáng yêu và độc đáo trên bàn làm việc của bạn. Thiết kế tinh tế với hình dáng ngộ nghĩnh của một robot, giúp bạn không chỉ nạp năng lượng cho thiết bị mà còn thêm một chút niềm vui và sáng tạo vào không gian cá nhân.",
  },
  {
    id: 10,
    ten: "Sạc nhanh 140W chân tròn Ugreen CD289 công nghệ GaN 2xUSB-C, 1xUSB-A, kèm dây sạc",
    loai: ["bosac"],
    image:
      "bosac/sac-nhanh-140w-chan-tron-ugreen-cd289-cong-nghe-gan-trang-1-247x247.jpg",
    gia: 1490000,
    mota: "Bộ sạc nhanh 140w chân tròn Ugreen CD289 là bộ sạc cao cấp công nghệ GaN cho hiệu suất sạc cao và bảo vệ an toàn \nĐầu vào: Nguồn 100-240W – Đầu cắm có thể gấp lại \nĐầu ra: 2 cổng USB type C, 1  cổng USB-A \nCông suất tối đa: 140W",
  },
  {
    id: 11,
    ten: "Sạc nhanh GaN 200W Ugreen CD271 4 cổng USB-C, 2 cổng USB-A",
    loai: ["bosac"],
    image: "bosac/sac-nhanh-gan-200w-ugreen-cd271-247x247.png",
    gia: 2090000,
    mota: "Sạc nhanh Gan, Power Delivery (PD), Bộ sạc siêu nhanh PPS, Bộ sạc USB-C 200W Ugreen 40913 \nĐầu vào: Nguồn 100-240W – Đầu cắm có thể gấp lại \nĐầu ra:, 4 cổng USB-C và 2 cổng USB-A \nCông suất tối đa: 200W \nTương thích với điện thoại thông minh, máy tính bảng, máy tính xách tay, tai nghe nhét tai, Nintendo Switch, Steam Deck và các thiết bị USB-C khác",
  },
];

const daysac = [
  {
    id: 12,
    ten: "Cáp sạc Lightning chuẩn MFi UGREEN US199",
    loai: ["daysac"],
    image: "daysac/cap-sac-lightning-chuan-mfi-ugreen-us199-247x247.jpg",
    gia: 270000,
    mota: "Cáp USB-A To Lightning MFI Ugreen US199 - An toàn tuyệt đối, hiệu suất hoạt động ấn tượng. Cáp USB-A To Lightning MFI Ugreen US199 rất tiện lợi khi sở hữu khả năng tương thích với đa dạng sản phẩm Apple, cũng như hiệu suất hoạt động ấn tượng. Hơn nữa, khi sử dụng dòng dây cáp iPhone này, bạn hoàn toàn không phải lo lắng về tình trạng cháy nổ, hư hỏng thiết bị.",
  },
  {
    id: 13,
    ten: "Cáp Sạc Lightning Type C Ugreen US298 – Sạc Nhanh, Truyền Dữ Liệu, Màu Đỏ, 1M",
    loai: ["daysac"],
    image: "daysac/cap-sac-lightning-type-c-ugreen-us298-5-247x247.png",
    gia: 350000,
    mota: "Cáp Sạc Lightning Type C Ugreen US298 với sạc nhanh 3A và truyền dữ liệu lên đến 480Mbps. Màu đỏ tươi sáng, chiều dài 1M, chất liệu bện nylon cao cấp. Tương thích hoàn toàn với iPhone, iPad, iPod và các thiết bị USB Type C khác. Đáng tin cậy với chip AS3616A.    ",
  },
  {
    id: 14,
    ten: "Dây cáp sạc Lightning đầu type C Ugreen US305 US vuông góc",
    loai: ["daysac"],
    image:
      "daysac/day-cap-sac-lightning-dau-type-c-ugreen-us305-us-vuong-goc-1m-247x247.png",
    gia: 350000,
    mota: "Dây cáp USB-C to Lightning Ugreen US305 US là sự lựa chọn hoàn hảo cho nhu cầu truyền dữ liệu và sạc nhanh của bạn. Sản phẩm chứng nhận MFi, đảm bảo tính tương thích và an toàn cho các thiết bị iPhone, iPad và iPod của bạn. Với khả năng sạc tối đa 3A và tốc độ truyền dữ liệu lên đến 480Mbps, đây là một sản phẩm đáng tin cậy với đầu cắm hợp kim nhôm bền bỉ. Sở hữu ngay dây cáp này để trải nghiệm sự tiện ích và hiệu suất tối ưu.",
  },
  {
    id: 15,
    ten: "Dây cáp sạc type C sang lightning dài 1m UGREEN US387",
    loai: ["daysac"],
    image:
      "daysac/day-cap-sac-type-c-sang-lightning-dai-1m-ugreen-us387-247x247.png",
    gia: 290000,
    mota: "Dây cáp sạc type C sang lightning UGREEN US387 \nChiều dài 1MMFi Ceritified \nThích hợp cho iPhone iPad & iPod \nChức năng: Sạc & Đồng bộ hóa dữ liệu \nKhả năng tương thích: iPhone 13/13 Pro/13 Pro Max/13 Mini, iPhone 12, iPhone12 Mini, iPhone12 Pro, iPhone12 Pro Max, iPhone11/11 Pro/11 Pro Max/SE/X/XS/XR/XS Max/8/8 Plus, AirPods/AirPods Pro…",
  },
  {
    id: 16,
    ten: "Dây nối dài USB 2.0 UGREEN US103 USB-A đực sang USB-A Cái nối dài dây sạc và truyền dữ liệu",
    loai: ["daysac"],
    image: "daysac/day-noi-dai-usb-20-ugreen-us103-247x247.jpg",
    gia: 40000,
    mota: "Cách thức hoạt động: Dây nối dài USB 2.0 cung cấp một cách dễ dàng để mở rộng kết nối USB của bạn với máy tính hoặc máy Mac, để sử dụng với Oculus VR, Playstation, Xbox, USB Flash Drive, Ổ cứng, Đầu đọc thẻ, Chuột, Bàn phím, Máy in, Máy quét, Máy ảnh và các thiết bị ngoại vi máy tính USB khác.",
  },
];

const pinduphong = [
  {
    id: 17,
    ten: "Pin sạc dự phòng 10000mAh UGREEN PB198 Ultra Slim Sạc nhanh 20W",
    loai: ["pinduphong"],
    image:
      "pinduphong/pin-sac-du-phong-10000mah-ugreen-pb198-ultra-slim-2-247x247.png",
    gia: 490000,
    mota: "Pin Sạc Dự Phòng 10000mAh UGREEN PB198 Ultra Slim – Sự Kết Hợp Hoàn Hảo của Hiệu Suất và Phong Cách Siêu Mỏng. Ugreen Việt Nam giới thiệu Pin Sạc Dự Phòng UGREEN PB198 10000mAh – Sản phẩm được tích hợp công nghệ tiên tiến, độc đáo và thời trang. Chưa bao giờ bạn có thể sạc điện thoại của mình một cách hiệu quả và đẳng cấp như vậy.",
  },
  {
    id: 18,
    ten: "Pin Sạc dự phòng cho laptop, điện thoại Ugreen PB720 sạc nhanh 100W, 2C1A",
    loai: ["pinduphong"],
    image:
      "pinduphong/pin-sac-du-phong-cho-laptop-dien-thoai-ugreen-pb720-1-247x247.png",
    gia: 1690000,
    mota: "Pin di động UGREEN 100W tương thích PD/PPS 2.0 Dung lượng lớn 20000mAh 3 cổng USB-C x 2 USB-A x 1 Chức năng truyền qua Được trang bị chế độ dòng điện thấp Hỗ trợ sạc nhanh đầu vào 65W Được trang bị chức năng đa bảo vệ Tuân thủ các tiêu chuẩn kỹ thuật PSE MacBook Windows PC iPad Pro iPhone Galaxy Android Điện thoại thông minh Máy tính xách tay Khác PB720",
  },
  {
    id: 19,
    ten: "Pin sạc dự phòng Ugreen 30W PB502 25185",
    loai: ["pinduphong"],
    image: "pinduphong/pin-sac-du-phong-ugreen-30w-pb502-25185-2-247x247.png",
    gia: 790000,
    mota: "Pin di động UGREEN 30W Tương thích PD nhỏ 10000mAh Dung lượng lớn 2 cổng USB-C + USB-A 60W Cáp sạc USB-C đi kèm chức năng truyền qua Được trang bị chế độ dòng điện thấp Tuân thủ các tiêu chuẩn kỹ thuật PSE MacBook Air iPad Pro iPhone Galaxy Điện thoại thông minh Android iWatch Khác PB502",
  },
  {
    id: 20,
    ten: "Pin sạc dự phòng Ugreen 10400 20.000mAh , tích hợp cáp Lightning Sạc nhanh 20W",
    loai: ["pinduphong"],
    image: "pinduphong/pin-sac-du-phong-ugreen-10400-247x247.png",
    gia: 790000,
    mota: "Pin sạc dự phòng tích hợp Ugreen cáp Lightning dung lượng  20.000mAh Ugreen 10400 Bộ sạc nhanh di động bao gồm 3 cáp USB-C Tương thích với Samsung Galaxy S22 / S21 / S20 / S10, iPhone 14 / iPhone 13 / iPhone 12 Series / iPad và hơn thế nữa Tích hợp cáp Lightning có MFI”",
  },
  {
    id: 21,
    ten: "Pin sạc dự phòng UGREEN PB200 10000mAh Cổng sạc 2 chiều PD20W+22.5W",
    loai: ["pinduphong"],
    image: "pinduphong/pin-sac-du-phong-ugreen-pb200-10000mah-247x247.png",
    gia: 490000,
    mota: "Công suất pin lớn: UGREEN PB200 sở hữu dung lượng 10000mAh, đảm bảo điện thoại, tablet và các thiết bị khác của bạn có đủ năng lượng mỗi khi cần thiết.\nHiệu suất sạc: Với cổng sạc 2 chiều, sạc nhanh PD20W+22.5W, thiết bị này có thể sạc điện thoại của bạn một cách nhanh chóng và hiệu quả.\nTính năng thông minh Power X: Công nghệ sạc nhanh độc đáo của UGREEN giúp tối ưu hóa quá trình sạc, đồng thời bảo vệ thiết bị của bạn khỏi các rủi ro như quá dòng hoặc quá nhiệt",
  },
  {
    id: 22,
    ten: "Sạc Dự Phòng UGREEN 90597A Sạc Nhanh Hai Chiều 145W sạc nhanh, 2C1A",
    loai: ["pinduphong"],
    image:
      "pinduphong/sac-du-phong-ugreen-90597a-sac-nhanh-hai-chieu-145w-247x247.png",
    gia: 1990000,
    mota: "Sạc Dự Phòng UGREEN 90597A Sạc Nhanh Hai Chiều 145W 25000mAh 2C1A với  hai cổng Type C và 1 cổng USB-A giúp sạc nhanh chóng bất kỳ thiết bị nào",
  },
];

const tainghe = [
  {
    id: 24,
    ten: "Tai nghe Bluetooth True Wireless Samsung Galaxy Buds2",
    loai: ["tainghe"],
    image: "tainghe/frame_1_3_9.webp",
    gia: 1990000,
    mota: "Tai nghe Samsung Galaxy Buds2 – Màu đầy cá tính và tính năng chống tiếng ồn vượt trội \nTiếp nối sự thành công đến từ chiếc tai nghe Samsung Galaxy Buds thì có lẽ việc Samsung bắt tay vào thực hiện sản phẩm tiếp theo là điều gần như được chắc chắn. Trên thị trường hiện nay thì các loại tai nghe không dây không hề thiếu, tuy nhiên để đảm bảo về mặt chất lượng của sản phẩm cũng như thương hiệu đáng tin cậy thì tai nghe bluetooth không dây Samsung Galaxy Buds2 sẽ là một sự lựa chọn hoàn hảo.",
  },
  {
    id: 25,
    ten: "Tai nghe Apple EarPods USB-C MTJY3ZA/A ",
    loai: ["tainghe"],
    image: "tainghe/frame_3_3.webp",
    gia: 550000,
    mota: "ĐẶC ĐIỂM NỔI BẬT \nEarPods thiết kế theo hình dạng của tạo cảm giác thoải mái \nTrang bị âm thanh chất lượng cao tông trầm sâu, phong phú \nSử dụng bền bỉ với khả năng chống mồ hôi và chống nước \nTrang bị cổng USB-C tiện lợi kết nối với iPhone mới của Apple",
  },
  {
    id: 26,
    ten: "Tai nghe Bluetooth Apple AirPods Pro 2 2023 USB-C",
    loai: ["tainghe"],
    image: "tainghe/group_111_5_.webp",
    gia: 5890000,
    mota: "Airpods Pro 2 Type-C với công nghệ khử tiếng ồn chủ động mang lại khả năng khử ồn lên gấp 2 lần mang lại trải nghiệm nghe - gọi và trải nghiệm âm nhạc ấn tượng. Cùng với đó, điện thoại còn được trang bị công nghệ âm thanh không gian giúp trải nghiệm âm nhạc thêm phần sống động. Airpods Pro 2 Type-C với cổng sạc Type C tiện lợi cùng viên pin mang lại thời gian trải nghiệm lên đến 6 giờ tiện lợi.",
  },
  {
    id: 27,
    ten: "Tai nghe Bluetooth True Wireless Marshall Minor 3",
    loai: ["tainghe"],
    image: "tainghe/group_150_1_3.webp",
    gia: 2790000,
    mota: "Nếu bạn là người có sở thích nghe nhạc thì dòng tai nghe không dây Marshall Minor 3 sẽ là một trong những lựa chọn tuyệt vời không nên bỏ qua. Sở hữu chất lượng âm thanh tuyệt hảo, thiết kế sang trọng và khả năng kết nối không dây ổn định, thế hệ tai nghe Marshall này sẽ mang đến cho bạn nhiều trải nghiệm nghe nhạc chất lượng cao và cực kỳ thoải mái. Cùng tìm hiểu thêm về tai nghe Marshall ngay trong bài viết dưới này nhé!",
  },
  {
    id: 28,
    ten: "Tai nghe Bluetooth True Wireless LG Tone Free FP8",
    loai: ["tainghe"],
    image: "tainghe/group_200_2_.webp",
    gia: 1490000,
    mota: "Tai nghe LG Tone Free FP8 - Chống ồn chủ động, khử khuẩn UVnano Tiếp tục kết hợp với nhà sản xuất âm thanh MERIDIAN để ra mắt mẫu tai nghe true wireless mới nhất với tên gọi LG Tone Free FP8. Thiết bị được tích hợp tính năng chống ồn chủ động, công nghệ khử khuẩn UVnano nhằm đảm bảo sức khỏe của người sử dụng.Tai nghe LG Tone Free FP8 - Chống ồn chủ động, khử khuẩn UVnano Tiếp tục kết hợp với nhà sản xuất âm thanh MERIDIAN để ra mắt mẫu tai nghe true wireless mới nhất với tên gọi LG Tone Free FP8. Thiết bị được tích hợp tính năng chống ồn chủ động, công nghệ khử khuẩn UVnano nhằm đảm bảo sức khỏe của người sử dụng.",
  },
  {
    id: 29,
    ten: "Tai nghe Bluetooth True Wireless JBL Wave Beam",
    loai: ["tainghe"],
    image: "tainghe/tai-nghe-khong-day-jbl-wave-beam-0000.webp",
    gia: 1390000,
    mota: "Tai nghe JBL Wave Beam được trang bị trình điều kiển 8mm mang lại âm thanh vượt trội với âm bass sâu kết hợp với thiết kế đóng kín giúp tăng cường hiệu suất âm thanh. Tai nghe được trang bị thiết kế khá vừa vặn cùng với đó là bộ sưu tập màu sắc đa dạng như xanh, đen, trắng và vàng. JBL Wave Beam với công nghệ Smart Ambient cho phép người dùng dễ dàng dễ dàng nghe được âm thanh xung quanh, cùng với đó là tính năng TalkThru hỗ trợ tạm dừng âm nhạc nhanh chóng để tham gia các cuộc trò chuyện với bạn bè.",
  },
  {
    id: 30,
    ten: "Tai nghe Bluetooth True Wireless Soul S-LIVE 30",
    loai: ["tainghe"],
    image: "tainghe/tai-nghe-khong-day-soul-s-live-30.webp",
    gia: 390000,
    mota: "Tai nghe không dây Soul S-Live 30 - Trải nghiệm âm thanh sống động với độ trễ cực thấp Sở hữu hai màng loa 10mm cùng độ trễ thấp 60ms, tai nghe không dây Soul S-Live 30 sẽ mang tới chất âm mạnh mẽ, phù hợp cho việc di chuyển và giải trí. Không chỉ có vậy, S-Live 30 còn có tổng thời gian hoạt động tới 30 giờ cùng khả năng kháng bụi, nước IPX4 để người dùng luyện tập các bộ môn thể thao một cách thoải mái.",
  },
  {
    id: 31,
    ten: "Tai nghe Bluetooth True Wireless Xiaomi Redmi Buds 5",
    loai: ["tainghe"],
    image: "tainghe/tai-nghe-khong-day-xiaomi-redmi-buds-5-spa.webp",
    gia: 990000,
    mota: "Tai nghe Xiaomi Redmi Buds 5 trang bị tính năng chống ồn chủ động, cùng công nghệ kết nối Bluetooth 5.3 ổn định. Với buồng âm thanh độc lập, cuộn dây quấn bằng đồng dài và màng loa titan polymer 12.4m giúp âm thanh được phát ra trong trẻo.",
  },
];

const other = [
  {
    id: 32,
    ten: "Tay cầm chơi game có dây Rappo V600",
    loai: ["other"],
    image: "other/_0000_46216_tay_gamerapoo_v600_0000_1.webp",
    gia: 460000,
    mota: " Tay cầm chơi game có dây RAPOO V600 – Thiết kế hiện đại \nTay cầm chơi game có dây RAPOO V600 mang diện mạo và chức năng đáng mong đợi. Nhanh tay sở hữu sản phẩm công nghệ Gaming Gear Pad này để thỏa sức chơi các tựa game sinh tồn, thịnh hành hiện nay cực đã.",
  },
  {
    id: 33,
    ten: "Tay cầm chơi game PS5 Dualsense",
    loai: ["other"],
    image: "other/tay-cam-choi-game-ps5-dualsense-1.webp",
    gia: 1890000,
    mota: "Tay cầm chơi game PS5 DualSense - nâng cao trải nghiệm người dùng \nTay cầm chơi game PS5 DualSense là sản phẩm thế hệ mới đi kèm với dòng máy PS5 của thương hiệu Sony. Sản phẩm tay cầm chơi game sở hữu những tính năng hiện đại và đem đến trải nghiệm vô cùng chân thực cho người sử dụng.",
  },
  {
    id: 34,
    ten: "Gậy Selfie Stick Wiwu SE002",
    loai: ["other"],
    image: "other/gay-selfie-stick-wiwu-se002-1.webp",
    gia: 288000,
    mota: "Gậy Selfie Stick Wiwu SE002 là một công cụ cực kỳ hữu ích cho việc chụp ảnh tự sướng mà các tín đồ đam mê Selfie chụp ảnh không nên bỏ qua. Với khả năng kết nối Bluetooth không dây và góc xoay linh hoạt lên tới 360 độ, gậy Selfie Wiwu này cho phép bạn dễ dàng chụp được những bức ảnh hoàn hảo từ mọi góc độ. Đồng thời, thiết kế tripod gọn nhẹ và tương thích đa nền tảng của thiết bị cũng mang lại nhiều sự tiện lợi và linh hoạt cho người dùng khi sử dụng.",
  },
  {
    id: 35,
    ten: "Giá đỡ điện thoại kiêm đèn Livestream Haiyuan",
    loai: ["other"],
    image: "other/gia-do-dien-thoai-kiem-den-livestream-haiyuan_1.webp",
    gia: 430000,
    mota: "Vòng Đèn Livestream HAIYUAN Kèm Chân Đế - 10 inch cho ánh sáng hình vòng giúp tạo hiệu ứng màu đều hơn, không nhấp nháy ở cường độ mạnh, bảo vệ đôi mắt của bạn. Ánh sáng vòng xoay 180 độ, bạn có thể điều chỉnh góc tự do theo nhu cầu chụp của mình. HAIYUAN được thiết kế với đèn LED đặc biệt 120 bóng. Độ sáng tăng dần từ 0% -100%, nhiệt độ màu 2200K-12000K, không cần bộ lọc màu, nó có thể đáp ứng các nhu cầu khác nhau của bạn về hiệu ứng ánh sáng.",
  },
  {
    id: 36,
    ten: "Giá đỡ điện thoại kiêm đèn Livestream Havit ST7012 Pro",
    loai: ["other"],
    image:
      "other/gia-do-dien-thoai-kiem-den-livestream-havit-st7012-pro-1.webp",
    gia: 495000,
    mota: "Giá đỡ điện thoại kiêm đèn livestream Havit ST7012 Pro là công cụ hỗ trợ ánh sáng và là chiếc giá đỡ điện thoại vững chắc. Đây chính là một giải pháp đa nhiệm cho những người sử dụng muốn tạo ra những buổi phát sóng trực tiếp và chụp ảnh chuyên nghiệp.",
  },
  {
    id: 37,
    ten: "Giá đỡ điện thoại WiWu ZM109",
    loai: ["other"],
    image: "other/gia-do-dien-thoai-wiwu-zm109-1.webp",
    gia: 162000,
    mota: "Giá đỡ điện thoại Wiwu ZM109 với thiết kế chắc chắn sẽ phù hợp để sử dụng với nhiều dòng điện thoại có kích thước khác nhau. Sản phẩm phụ kiện Wiwu còn có thể dễ dàng thay đổi chiều cao để phù hợp với nhiều góc nhìn hay dễ dàng cắm sạc trong quá trình sử dụng điện thoại.",
  },
];

const all = [
  ...apple,
  ...bosac,
  ...daysac,
  ...pinduphong,
  ...tainghe,
  ...other,
];

export { apple, bosac, daysac, pinduphong, tainghe, other, all };
