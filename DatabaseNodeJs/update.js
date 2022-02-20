// Trước tiên phải cài thư viện mongodb: npm install mongodb (cài rồi thì thôi)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nguyenkien:kienyeuvananh12345@cluster0.hewrc.mongodb.net/DemoDB?retryWrites=true&w=majority";
// Lưu ý thay đổi username,password,database trong url
var mongo = new MongoClient(url, { useNewUrlParser: true });
mongo.connect(function (err, db) {
    if (err) throw err;
    var dbo = db.db("DemoDB"); //Sử dụng csdl DemoDB
    // Cập nhật dữ liệu có address là Thanh pho Ho Chi Minh
    var myQuery = { address: "Thanh pho Ho Chi Minh" };
    var newValue = {$set:{name:"Nguyen Hoang Gia Linh",address:"Nha Trang"}};
    //cập nhật dữ liệu
    dbo.collection("bang2").updateOne(myQuery, newValue ,function (err, obj) {
        if (err) throw err;
        console.log("UPDATE THÀNH CÔNG DỮ LIỆU");
        db.close();
    });
});