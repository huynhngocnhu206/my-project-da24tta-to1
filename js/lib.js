/*  const productDatabase = [
  {id:1, name:"Hoa Oải Hương", price:200000, img:"../assets/oaihuong.webp"},
  {id:2, name:" HoaTulip", price:150000, img:"../assets/tulip.jpg"},
  {id:3, name:"Hoa Cửu Trùng Tử", price:100000, img:"../assets/cuutrungtu.jpg"},
  {id:4, name:"Hoa Hồng", price:180000, img:"../assets/hoahong.webp"},
  {id:5, name:"Hoa Cẩm Tú Cầu", price:190000, img:"../assets/camtucau.jpg"},
  {id:6, name:"Hoa Giấy", price:18000, img:"../assets/hoagiay.jpg"},
  {id:7, name:"Hoa Loa Kèn", price:1000000, img:"../assets/loaken.jpg"},
  {id:8, name:"Hoa Lưu Ly", price:300000, img:"../assets/luuly.jpg"},
  {id:9, name:"Hoa Sen", price:300000, img:"../assets/hoasen.webp"},
  {id:10, name:"Hoa Lan Tím", price:150000, img:"../assets/Hoa lan tím.jpg"},
  {id:11, name:"Hoa Đào", price:120000, img:"../assets/hoadao.jpg"},
  {id:12, name:"Hoa Hồng Nhung Pháp", price:180000, img:"../assets/Hoa Hồng Nhung Pháp.jpg"},
];

function addProduct(imgSrc, name, price, linkUrl) {
  const container = document.getElementById("product-list");

  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "product-item");

  const myDiv1 = document.createElement("div");
  myDiv1.setAttribute("class", "product-image");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", imgSrc);
  productImg.setAttribute("alt", name);

  myDiv1.appendChild(productImg);
  myDiv.appendChild(myDiv1);

  const myDiv2 = document.createElement("div");
  myDiv2.setAttribute("class", "product-info");

  const myP1 = document.createElement("p");
  myP1.textContent = name;

  const myP2 = document.createElement("p");
  myP2.textContent = price + " VND";

  const myLink = document.createElement("a");
  myLink.setAttribute("href", linkUrl || "#");
  myLink.textContent = "Xem chi tiết";

  myDiv2.appendChild(myP1);
  myDiv2.appendChild(myP2);
  myDiv2.appendChild(myLink);

  myDiv.appendChild(myDiv2);
  container.appendChild(myDiv);
}

function loadAllProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  for (let i = 0; i < productDatabase.length; i++) {
    addProduct(
      productDatabase[i].img,
      productDatabase[i].name,
      productDatabase[i].price,
      "#"
    );
  }
}

// Thêm vào cuối lib.js
document.addEventListener("DOMContentLoaded", function() {
  loadAllProducts();
}); */

 // 1. Cơ sở dữ liệu sản phẩm (Đã thêm mô tả chi tiết)
const productDatabase = [
  {
    id: 1,
    name: "Hoa Oải Hương",
    price: 200000,
    img: "../assets/oaihuong.webp",
    desc: "Hoa oải hương sở hữu sắc tím mộng mơ cùng hương thơm vô cùng dịu nhẹ. Loài hoa này có nguồn gốc từ vùng Địa Trung Hải, mang trong mình vẻ đẹp cổ điển và lãng mạn. Từ lâu, oải hương đã trở thành biểu tượng cho sự thủy chung, son sắt trong tình yêu đôi lứa. Không chỉ vậy, mùi hương đặc trưng của loài hoa này còn có khả năng xoa dịu tinh thần, giảm bớt căng thẳng và mang lại cảm giác thư thái sâu lắng. Khi đặt một bó oải hương trong phòng ngủ, không gian sống của bạn sẽ trở nên yên bình, ấm áp hơn bao giờ hết. Đây là món quà tinh tế để gửi gắm thông điệp về sự bình an, may mắn và lòng trung thành đến những người thân yêu. Sắc tím thanh lịch của từng nhành hoa nhỏ kết hợp hài hòa tạo nên một tổng thể vô cùng cuốn hút, sang trọng. Hoa oải hương khô cũng giữ được hương thơm rất lâu, giúp lưu lại những kỷ niệm đẹp đẽ theo thời gian dài."
  },
  {
    id: 2,
    name: "Hoa Tulip",
    price: 150000,
    img: "../assets/tulip.jpg",
    desc: "Hoa tulip mang một vẻ đẹp kiêu sa, độc đáo với hình dáng như chiếc vương miện nhỏ nhắn nhưng không kém phần sang trọng. Loài hoa này là biểu tượng vĩnh cửu của một tình yêu hoàn hảo, trọn vẹn và sự giàu có, thịnh vượng. Mỗi bông tulip đều toát lên nét thanh tao, thanh lịch nhờ cấu trúc cánh hoa xếp đều đặn và thân cây thẳng đứng kiêu hãnh. Với màu sắc rực rỡ và phom dáng gọn gàng, tulip luôn tạo nên điểm nhấn nổi bật cho bất kỳ không gian kiến trúc nào. Loài hoa này rất được ưa chuộng trong các dịp lễ quan trọng hoặc dùng làm quà tặng cho đối tác, người yêu nhằm thể hiện sự ngưỡng mộ sâu sắc. Sức sống mãnh liệt ẩn sau vẻ ngoài mỏng manh giúp tulip giữ được độ tươi sắc rất lâu sau khi cắm. Việc sở hữu một bình tulip trong nhà không chỉ làm tăng tính thẩm mỹ mà còn mang lại nguồn năng lượng tích cực, tươi mới cho gia chủ mỗi ngày."
  },
  {
    id: 3,
    name: "Hoa Cửu Trùng Tử",
    price: 100000,
    img: "../assets/cuutrungtu.jpg",
    desc: "Hoa cửu trùng tử là một loài hoa mang vẻ đẹp huyền bí, hoang dã vô cùng đặc biệt. Với cấu trúc các tầng hoa xếp chồng lên nhau một cách tự nhiên, loài hoa này tạo nên một hiệu ứng thị giác mạnh mẽ và lôi cuốn cho người nhìn. Sắc xanh tím huyền ảo của cửu trùng tử gợi lên sự tò mò, khám phá và tượng trưng cho những điều kỳ diệu trong cuộc sống. Đây là lựa chọn hoàn hảo cho những ai yêu thích phong cách cắm hoa nghệ thuật độc lạ, muốn tìm kiếm sự phá cách và khác biệt hoàn toàn so với các dòng hoa truyền thống thông thường. Cửu trùng tử mang trong mình sức sống kiên cường, dẻo dai của những loài hoa dại, có thể thích nghi tốt với nhiều điều kiện môi trường khác nhau. Khi kết hợp cùng các loại lá phụ, hoa sẽ tạo nên một tác phẩm nghệ thuật đầy chiều sâu, giúp không gian làm việc hoặc phòng khách của bạn thêm phần ấn tượng, khơi nguồn cảm hứng sáng tạo vô tận."
  },
  {
    id: 4,
    name: "Hoa Hồng",
    price: 180000,
    img: "../assets/hoahong.webp",
    desc: "Hoa hồng luôn được xưng tụng là nữ hoàng của các loài hoa nhờ vẻ đẹp lộng lẫy và hương thơm quyến rũ vượt thời gian. Loài hoa này từ lâu đã trở thành biểu tượng kinh điển nhất cho một tình yêu mãnh liệt, nồng cháy và sự lãng mạn đỉnh cao. Từng cánh hoa hồng mềm mại xếp cuộn chặt chẽ vào nhau như đang che chở, ôm ấp những bí mật ngọt ngào của tình yêu đôi lứa. Bên cạnh ý nghĩa lãng mạn, hoa hồng còn thể hiện sự tôn kính, lòng biết ơn và niềm kiêu hãnh của người tặng đối với người nhận. Phom dáng hoa cân đối, sang trọng cùng những chiếc gai nhọn trên thân tạo nên một nét đẹp vừa kiêu kỳ vừa mạnh mẽ, cuốn hút. Một bó hoa hồng tươi thắm sẽ là cầu nối tuyệt vời giúp bạn truyền tải những cung bậc cảm xúc chân thành nhất mà không lời nào có thể diễn tả trọn vẹn. Hoa phù hợp cho mọi dịp kỷ niệm, ngày lễ tình nhân hay đơn giản là món quà tạo bất ngờ."
  },
  {
    id: 5,
    name: "Hoa Cẩm Tú Cầu",
    price: 190000,
    img: "../assets/camtucau.jpg",
    desc: "Hoa cẩm tú cầu gây ấn tượng mạnh mẽ bởi những bông hoa nhỏ nhắn, mỏng manh chen chúc nhau tạo thành một đóa hoa hình cầu to lớn, tròn đầy. Cấu trúc đặc biệt này của cẩm tú cầu tượng trưng cho sự chân thành, lòng biết ơn sâu sắc và sự gắn kết viên mãn, trọn vẹn trong các mối quan hệ. Điểm độc đáo nhất của loài hoa này chính là khả năng thay đổi màu sắc kỳ diệu tùy thuộc vào độ pH của đất trồng, từ sắc xanh lam thanh mát, tím thủy chung cho đến hồng ấm áp. Sự biến chuyển sắc màu này mang lại nét cuốn hút riêng biệt, khiến cẩm tú cầu luôn được săn đón trong các thiết kế hoa cưới và sự kiện sang trọng. Đóa cẩm tú cầu tròn trịa mang lại cảm giác đong đầy, hạnh phúc và bình yên cho không gian sống. Đây là món quà hoàn hảo để bạn bày tỏ lời cảm ơn chân thành từ tận đáy lòng hoặc gửi gắm lời xin lỗi tinh tế đến một ai đó."
  },
  {
    id: 6,
    name: "Hoa Giấy",
    price: 18000,
    img: "../assets/hoagiay.jpg",
    desc: "Hoa giấy mang một vẻ đẹp mộc mạc, giản dị nhưng lại vô cùng rực rỡ và có sức sống bền bỉ đáng kinh ngạc. Những cánh hoa mỏng manh như những tờ giấy màu, bao bọc lấy nhụy hoa nhỏ xinh bên trong, tạo nên một thảm hoa rực rỡ dưới ánh nắng hè gay gắt. Loài hoa này tượng trưng cho tình cảm gia đình khăng khít, sự bảo bọc chở che và lòng kiên cường vượt qua mọi nghịch cảnh của cuộc sống. Hoa giấy rất dễ trồng, dễ chăm sóc và có thể nở hoa quanh năm, mang lại sắc màu tươi vui, tràn đầy năng lượng cho ban công hay cổng nhà bạn. Sự hiện diện của hoa giấy gợi lên cảm giác yên bình của những ngôi nhà Việt xưa, mộc mạc nhưng tràn ngập tình yêu thương. Mặc dù không mang hương thơm ngào ngạt như những loài hoa khác, nhưng chính sắc màu đa dạng và độ bền bỉ vô song đã giúp hoa giấy chiếm trọn cảm tình của những người yêu cây cảnh."
  },
  {
    id: 7,
    name: "Hoa Loa Kèn",
    price: 1000000,
    img: "../assets/loaken.jpg",
    desc: "Hoa loa kèn, hay còn gọi là hoa huệ tây, sở hữu một vẻ đẹp vô cùng kiêu sa, thuần khiết và quý phái. Với hình dáng chiếc loa kèn vươn cao, loài hoa này mang ý nghĩa của sự đoàn tụ, lời chúc vạn sự tốt lành và niềm hạnh phúc ngập tràn. Sắc trắng tinh khôi của hoa loa kèn kết hợp cùng hương thơm ngát, nồng nàn tạo nên một sức hút khó cưỡng, làm say đắm lòng người. Hoa thường nở rộ vào những ngày đầu hạ, mang đến cảm giác tươi mát, nhẹ nhàng cho không gian sống giữa những ngày oi ả. Trong phong thủy, hoa loa kèn được xem là loài hoa mang lại may mắn, thịnh vượng và sự hòa thuận cho gia đình. Do có giá trị thẩm mỹ cao và phom dáng sang trọng, loài hoa này thường được lựa chọn để trang trí ở những không gian trang trọng như phòng khách lớn, sảnh khách sạn hoặc các sự kiện cao cấp nhằm tôn lên đẳng cấp và sự tinh tế của gia chủ."
  },
  {
    id: 8,
    name: "Hoa Lưu Ly",
    price: 300000,
    img: "../assets/luuly.jpg",
    desc: "Hoa lưu ly, với tên gọi tiếng Anh lãng mạn 'Forget-me-not', là loài hoa nhỏ bé mang trong mình một thông điệp tình yêu vô cùng sâu sắc: 'Xin đừng quên tôi'. Những cụm hoa lưu ly với sắc xanh lam đặc trưng, nhụy vàng rực rỡ mang đến một vẻ đẹp thanh tao, dịu dàng và đầy hoài niệm. Loài hoa này là biểu tượng của tình yêu thủy chung, son sắt, tình bạn gắn kết bền chặt và những kỷ niệm đẹp đẽ không bao giờ phai mờ theo thời gian. Dù không có kích thước to lớn hay vẻ ngoài lộng lẫy, lưu ly vẫn tự tỏa sáng theo cách riêng nhờ sắc xanh độc đáo hiếm có trong thế giới tự nhiên. Nhìn ngắm những nhành lưu ly nhỏ xinh mang lại cảm giác bình yên, nhẹ nhàng và thư thái cho tâm hồn sau những giờ làm việc mệt mỏi. Đây là món quà tuyệt vời để bạn tặng cho người yêu hoặc bạn thân trước những chuyến đi xa, như một lời nhắc nhở về sự gắn kết bền vững."
  },
  {
    id: 9,
    name: "Hoa Sen",
    price: 300000,
    img: "../assets/hoasen.webp",
    desc: "Hoa sen từ lâu đã được vinh danh là quốc hoa của Việt Nam, gắn liền với hình ảnh thanh cao, thuần khiết và thoát tục. Sống trong bùn lầy nhưng sen vẫn vươn lên mạnh mẽ để đón ánh mặt trời và tỏa hương thơm ngát, đúng như câu nói 'gần bùn mà chẳng hôi tanh mùi bùn'. Loài hoa này là biểu tượng cho ý chí kiên cường, nghị lực phi thường và sự tịnh tâm, an nhiên trong tâm hồn mỗi con người. Từng cánh hoa sen to tròn, mềm mại ôm lấy đài sen vàng rực tạo nên một vẻ đẹp hài hòa, trang nhã mang đậm bản sắc văn hóa dân tộc. Trong tâm linh và phong thủy, hoa sen có tác dụng thanh lọc năng lượng xấu, mang lại may mắn, bình an và sức khỏe cho cả gia đình. Đặt một bình hoa sen trong nhà không chỉ làm đẹp không gian mà còn giúp tâm trí con người trở nên nhẹ nhàng, buông bỏ mọi muộn phiền để tận hưởng cuộc sống an yên."
  },
  {
    id: 10,
    name: "Hoa Lan Tím",
    price: 150000,
    img: "../assets/Hoa lan tím.jpg",
    desc: "Hoa lan tím luôn dẫn đầu trong danh sách các loài hoa quý phái nhờ vẻ đẹp sang trọng, lịch lãm và cấu trúc hoa vô cùng tinh tế. Sắc tím thẫm của hoa lan đại diện cho sự quý tộc, giàu sang và lòng biết ơn, sự ngưỡng mộ sâu sắc đối với người nhận. Những nhành lan tím kiêu hãnh vươn dài với các bông hoa nở đều đặn, đối xứng hoàn hảo, thể hiện tính thẩm mỹ đỉnh cao và sự hoàn mỹ. Hoa lan tím có độ bền vượt trội, có thể tươi tắn suốt nhiều tuần liền nếu được chăm sóc đúng cách, biểu trưng cho tình cảm bền chặt, dài lâu. Loài hoa này cực kỳ phù hợp để làm quà tặng trong các dịp khai trương, thăng chức hoặc tặng cấp trên nhằm thể hiện sự kính trọng và lời chúc thành công vang dội. Sự xuất hiện của một chậu lan tím trong văn phòng hay phòng khách sẽ ngay lập tức nâng tầm đẳng cấp, tạo nên bầu không khí chuyên nghiệp, sang trọng."
  },
  {
    id: 11,
    name: "Hoa Đào",
    price: 120000,
    img: "../assets/hoadao.jpg",
    desc: "Hoa đào là sứ giả linh thiêng của mùa xuân phương Bắc, gắn liền với ngày Tết cổ truyền và niềm vui đoàn viên của mỗi gia đình Việt Nam. Những nụ hoa đào hồng thắm, nhỏ nhắn đâm chồi nảy lộc trên những cành cây khẳng khiu mang theo nguồn sinh khí mới, báo hiệu một năm mới an khang thịnh vượng. Theo quan niệm phong thủy, hoa đào có khả năng xua đuổi bách quỷ, trừ tà ma và mang lại sự may mắn, bình an, vạn sự như ý cho gia chủ. Sắc hồng ấm áp của hoa đào không chỉ làm bừng sáng không gian ngày Tết mà còn gửi gắm niềm hy vọng về một tương lai tươi sáng, gặt hái được nhiều thành công. Hoa đào còn là biểu tượng của sự sinh sôi nảy nở, tình bạn gắn kết và lòng hiếu khách của người dân Việt. Việc trang trí một cành đào trong nhà dịp đầu năm đã trở thành nét đẹp văn hóa không thể thiếu, giúp gắn kết các thế hệ và sưởi ấm không gian gia đình."
  },
  {
    id: 12,
    name: "Hoa Hồng Nhung Pháp",
    price: 180000,
    img: "../assets/Hoa Hồng Nhung Pháp.jpg",
    desc: "Hoa hồng nhung Pháp là dòng hoa cao cấp, được mệnh danh là kiệt tác của tình yêu nhờ sắc đỏ thẫm huyền bí và kết cấu cánh hoa mịn màng như nhung. Loài hoa này mang một hương thơm nồng nàn, quyến rũ đặc trưng khó có loại hoa nào sánh bằng, tạo nên một sức hút mê hoặc ngay từ cái nhìn đầu tiên. Từng cánh hoa dày dặn xếp chồng lớp khéo léo, khi nở rộ phô diễn trọn vẹn vẻ đẹp kiêu sa, lộng lẫy và đầy quyền lực của mình. Hồng nhung Pháp biểu thị cho một tình yêu đậm sâu, vĩnh cửu, sự đam mê cháy bỏng và lòng chung thủy tuyệt đối. Đây là sự lựa chọn hàng đầu cho các quý ông muốn thể hiện tình cảm chân thành và sự trân trọng đối với người phụ nữ của đời mình trong những dịp kỷ niệm đặc biệt. Sở hữu phom dáng chuẩn châu Âu cùng độ bền cao, hồng nhung Pháp luôn mang lại vẻ đẹp đẳng cấp, thượng lưu cho mọi không gian trang trí."
  }
];

    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3 g-4");

    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");
    
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    productImg.setAttribute("alt", product.name);
    productImg.style.width = "100%"; 
    myDiv1.appendChild(productImg);

    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info text-center");

    const productName = document.createElement("p");
    productName.appendChild(document.createTextNode(product.name));

    const productPrice = document.createElement("p");
    productPrice.appendChild(document.createTextNode(product.price.toLocaleString() + " VND"));

    const productLink = document.createElement("a");
    productLink.appendChild(document.createTextNode("Xem chi tiết"));
    productLink.setAttribute("class", "btn btn-success");
    
    // CHỈNH SỬA QUAN TRỌNG: Gắn ID vào link để trang detail có thể đọc
    productLink.setAttribute("href", product.productLink + "?id=" + product.id);

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productLink);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function loadProducts(products){
    for (let i = 0; i < products.length; i++) {
        addProduct_v2(products[i]);
    }
}