var express = require('express');
var bodyParser = require('body-parser');

// Phân tích URL
var url = bodyParser.urlencoded({extends: false});

// Khởi tạo app
var app = express();

// Set Templating Engines (Lưu ý phải đặt tên folder chứa file ejs là views. Trong views có folder tên là partials để chứa các file dùng chung như navbar,header,footer...)
app.set('view engine','ejs');

// Để NodeJs có thể hiểu được đường dẫn tĩnh (đường dẫn tuyệt đối) và các file khác có thể gọi được:
app.use('/assets',express.static('assets'));  // Nếu chúng ta muốn cho người dùng thấy được dữ liệu bên trong web của chúng ta thì khai báo đường dẫn trung gian là /assets (cái assets thứ 1 (đặt tên gì cũng được)), còn không muốn cho người dùng thấy được dữ liệu bên trong web thì không cần khai báo /assets (cái assets thứ 1 (đặt tên gì cũng được)). Còn cái assets thứ 2 chính là tên folder để khai báo đường dẫn tĩnh => app.use(express.static('assets')). Cái assets thứ 2 chính là file root
// Thậm chí chúng ta có thể xem được file css khi truy cập http://localhost:9999/assets/css/style.css

app.get('/',function(req,res){
    // res.send('This is Home Page');
    // res.sendFile(__dirname + '/HTML/index.html', 'utf8');
    res.render('index');
})

app.get('/contact',function(req,res){           
    // res.send('This is Contact Page');
    // res.sendFile(__dirname + '/HTML/contact.html', 'utf8');
    // console.log(req.query); 
    // res.render('contact', {data: req.query});
    res.render('contact');
})

app.post('/contact',url,function(req,res){          // Lấy dữ liệu từ contact đưa vào trong URL và thực hiện function sau đó in ra dữ liệu thông qua req.body
    console.log(req.body);
    res.render('info',{data: req.body});            // Nếu post dữ liệu thành công thì chuyển trang hiển thị dữ liệu ở trang info
})

app.get('/about',function(req,res){
    // res.send('This is About Page');
    // res.sendFile(__dirname + '/HTML/about.html', 'utf8');
    res.render('about');
})

app.get('/login',function(req,res){
    // res.send('This is Login Page');
    // res.sendFile(__dirname + '/HTML/login.html', 'utf8');
    res.render('login');
})

app.get('/404',function(req,res){
    // res.send('This is 404 Page');
    // res.sendFile(__dirname + '/HTML/404.html', 'utf8');
    res.render('404');
})

app.get('/chat/:userID/send/:content',function(req,res){
    res.send(`User have ID ${req.params.userID} send content ${req.params.content}`); // Example: http://localhost:9999/chat/20/send/KienYeuMY (User have ID 20 send content KienYeuMY)
})

app.get('/register/:userID',function(req,res){
    var information = {
        name: 'Nguyen Trung Kien',
        age: 21,
        email: 'trungkien@gmail.com',
        address: 'TPHCM',
        hobbies: ['books','music','soccer','it','cook','go out with girl friend'],
    }
    res.render('register',{id: req.params.userID, information: information}) // Truyền đi 2 (key) tham số id, information để register.ejs có thể nhận lại
})

const PORT = 9999;

app.listen(PORT);

console.log(`App is runnning on ${PORT}`);