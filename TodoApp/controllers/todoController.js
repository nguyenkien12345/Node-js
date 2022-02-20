var bodyParser = require('body-parser');
var db   = require('mongoose');

// Connect Database
db.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
// 

// Create a schema
var todoSchema = new db.Schema({
    name: String,
})

var todo = db.model('todo', todoSchema);
// 

var item = todo({name: 'Yêu Phong My'}).save(function(err){
    if(err) {
        throw err;
    }
    console.log("Item save successfully");
})

var url = bodyParser.urlencoded({extends: false});

var data = [
    {name: 'Lau nhà'},
    {name: 'Quét nhà'},
    {name: 'Rửa chén'},
    {name: 'Giặt đồ'}
]

module.exports = function(app) {

    // Show Todos
    app.get('/', function(req,res){
        res.render('todos', {todos: data});
    });

    // Add Todo
    app.post('/todos',url,function(req,res){
        // Lấy dữ liệu từ người dùng và thêm vào danh sách
        data.push(req.body);
        res.json(data);
    })

    // Remove Todo
    app.delete('/todos', function(req,res){
        res.render();
    })

}