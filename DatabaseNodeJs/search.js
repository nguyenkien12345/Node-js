// Trước tiên phải cài thư viện mongodb: npm install mongodb (cài rồi thì thôi)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nguyenkien:kienyeuvananh12345@cluster0.hewrc.mongodb.net/DemoDB?retryWrites=true&w=majority";
// Lưu ý thay đổi username,password,database trong url
var mongo = new MongoClient(url, { useNewUrlParser: true });
mongo.connect(function (err, db) {
    if (err) throw err;
    var dbo = db.db("DemoDB"); //Sử dụng csdl DemoDB
    //Tìm kiếm dữ liệu (lấy ra 1 dữ liệu bất kì trong database)
    dbo.collection("bang2").findOne({} ,function (err, obj) {
        if (err) throw err;
        console.log("SEARCH THÀNH CÔNG DỮ LIỆU" + obj.address + " AND " + obj.name);
        db.close();
    });
});