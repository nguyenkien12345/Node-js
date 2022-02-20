// Trước tiên phải cài thư viện mongodb: npm install mongodb (cài rồi thì thôi)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nguyenkien:kienyeuvananh12345@cluster0.hewrc.mongodb.net/DemoDB?retryWrites=true&w=majority";
// Lưu ý thay đổi username,password,database trong url
var mongo = new MongoClient(url, { useNewUrlParser: true });
mongo.connect(function (err, db) {
    if (err) throw err;
    var dbo = db.db("DemoDB"); //Sử dụng csdl DemoDB
    var myObj = { name: "Dai hoc Hong Bang", address: "Thanh pho Ho Chi Minh" };
    // Tao bảng mới có name là bang2 và thêm dữ liệu vào
    dbo.collection("bang2").insertOne(myObj, function (err, obj) {
        if (err) throw err;
        console.log("INSERT THÀNH CÔNG DỮ LIỆU");
        db.close();
    });
});