// Trước tiên phải cài thư viện mongodb: npm install mongodb (cài rồi thì thôi)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nguyenkien:kienyeuvananh12345@cluster0.hewrc.mongodb.net/DemoDB?retryWrites=true&w=majority";
// Lưu ý thay đổi username,password,database trong url
var mongo = new MongoClient(url, { useNewUrlParser: true });
mongo.connect(function (err, db) {
    if (err) throw err;
    var dbo = db.db("DemoDB"); //Sử dụng csdl DemoDB
    // Xóa dữ liệu có name là Dai hoc Hoa Sen
    var myQuery = {name:"Dai hoc Hoa Sen"}
    //xóa dữ liệu
    dbo.collection("bang2").deleteOne(myQuery, function (err, obj) {
        if (err) throw err;
        console.log("DELETE THÀNH CÔNG DỮ LIỆU" + obj);
        db.close();
    });
});