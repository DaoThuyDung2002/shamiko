//6628568379%7Cc1e620fa708a1d5696fb991c1bde5662
module.exports.config = {
    "name": "ad",
    "version": "1.0.0",
    "hasPermssion": 0,
    "credits": "DC-Nam",
    "description": "Kiểm tra thông tin admin .",
    "commandCategory": "Thông tin",
    "usages": "ad",
    "cooldowns": 5,
    "dependencies": {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
"https://i.imgur.com/xhAQLw3.mp4"
];
var callback = () => api.sendMessage({body:`[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆

[👀] ➜ Tên: Đào Thị Kiều Anh
[💮] ➜ Biệt danh: Meow - Mika 
[❎] ➜ Ngày tháng năm sinh: 29/07/2001 
[👤] ➜ Giới tính: Nữ
[💫] ➜ Chiều cao cân nặng: 1m67 x 48 kg
[❤️] ➜ Tên duyên phận: Vũ Khánh Linh
[🧸] ➜ Biệt danh: Harly
[💥] ➜ Ngày sinh: 07/12/2001
[💘] ➜ Mối quan hệ: Chị em kết nghĩa
[🌎] ➜ Quê quán: Phú Thọ - Hà Nội
[🌸] ➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀] ➜ Sở thích: Thích cái đẹp, đi phượt, giao lưu ca hát, thưởng thức các món ẩm thực khác nhau

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆

[👉] ➜ Information: https://bio.link/kameow262
[☎] ➜ SĐT & Zalo: 0337914275
[🌐] ➜ Facebook: https://www.facebook.com/User.daokieuanh.FAQ
[⛱] ➜ TikTok: https://www.tiktok.com/@iam.sakuraa
[⛲] ➜ Instagram: https://www.instagram.com/hysao.kira
[🔎] ➜ Twitter: https://twitter.com/slayy.kira
[📋] ➜ Telegram: https://t.me/kieuanh.kira
[🎬] ➜ Youtube: https://www.youtube.com/channel/kira.coder
[✉️] ➜ Email: admin.kira@ht2k.vn || kira.matsu@mikasa.mkscstudio.vn

[⚜️]=== 『 DONATE - TIPS 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆

[💵] ➜ MOMO: 0382992648 / https://i.imgur.com/Ed0rDrO.png / Nguyễn Hồng Phấn
[💵] ➜ MOMO: 0396049649 / https://i.imgur.com/Hxbs1q0.png / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 39924972008 / https://imgur.com/NXX9Lnh / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0387228328 / https://i.imgur.com/2yj1jqY.png / Nguyễn Hồng Phấn
[💵] ➜ TIMO BANK: 29000248622200 / https://i.imgur.com/vTx2DQp.jpg / Hứa Mỹ Duyên
[💵] ➜ ZALO PAY: 0396049649 / https://imgur.com/LBeXzsy / Nguyễn Hải Đăng
[💵] ➜ AGRIBANK: 4810205345666 / https://i.imgur.com/DObUFKB.png / Nguyễn Hồng Phấn

[⚜️]=== 『 PROBLEM 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆

[❗] ➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌] ➜ Hãy đồng hành cùng tôi và team HT2K nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝] ➜ Bot được điều hành bởi HT2K Team`,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://graph.facebook.com/${1824557330}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };