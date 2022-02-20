const path = require('path');
const express = require('express');

const morgan = require('morgan');
const handlebars = require('express-handlebars');

// Vì submit form chỉ áp dụng cho phương thức GET và POST nên nếu muốn dùng PATCH và PUT phải cài thằng này để cho phép server ghi đè phương thức
const methodOverride = require('method-override');

const route = require('./routes/index');
const db = require('./config/db/index')

const app = express(); // Trả lại 1 instance, ở đây là app

const port = 3000;


app.use(express.static(path.join(__dirname, 'public'))); //set đường dẫn mặc định chạy vào public. Gọi ảnh bằng đường dẫn tĩnh ta gõ http://localhost:3000/images/logo.png

// Xử lý dữ liệu từ form submit lên
app.use(express.urlencoded({ extended: true }));

// Xử lý dữ liệu từ client lên server (XNLHttpRequest, fetch, axios, ajax...)
app.use(express.json());

// Đây là 1 middleware
app.use(methodOverride('_method'));

// HTTP logger (morgan): Chức năng: Khi ta request để biết nó đã được gửi lên server hay chưa thì ở terminal sẽ hiển thị ra thông báo (vd:::1 - - [07/Jun/2021:02:18:23 +0000] "GET /search HTTP/1.1" 200 3147 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 Edg/91.0.864.41"). Nếu không hiển thị gì là có lỗi
app.use(morgan('combined'));

// Template engine (express-handlebars)
app.engine('hbs', handlebars({ // engine này cho biết là app này sẽ sử dụng Template engine là handlebars.
    extname: '.hbs',           // Định nghĩa đuôi của các file trong views(layouts, partials...) là hbs.
    helpers: {                 // Định nghĩa các hàm mà ta muốn thực hiện, sử dụng ,truyền trong hbs
        sum: (a, b) => a + b,
        minus: (a, b) => a - b
    }     
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views')); // G:\Node_JS\Blog\src\resources\views (Vì giao diện hiển thị nằm trong folder resources/views)

// Route init
route(app);

// Connect to DB
db.connect();

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});