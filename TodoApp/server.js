var express = require('express');

var todoController = require('./controllers/todoController');

// Initialization App
var app = express();

// Setup Template Engine (ejs);
app.set('view engine', 'ejs');

// Static File
app.use(express.static('public')); // => Set đường dẫn tĩnh là public nên các file css js khi sử dụng thì ở phần khai báo đường dẫn ko cần gọi lại public

// Controller
todoController(app);

// Listen To Port
const PORT = 1111;

app.listen(PORT);

console.log(`Server is running at Port ${PORT}`)