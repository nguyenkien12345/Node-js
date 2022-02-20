const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Cấu hình body-parser (Lấy được data form từ req.body) 
// (Lưu ý Cấu hình body-parser phải luôn luôn khai báo trên đầu trước các router)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Các Router
require('./app/routes/home.router')(app);
require('./app/routes/club.router')(app);
require('./app/routes/player.router')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})