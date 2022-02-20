const express = require('express');
const bodyParser = require('body-parser');
const movieRouter = require('./router/movieRouter');
const app = express();

// Cho phép truyền nhận dữ liệu kiểu JSON
app.use(express.json());

// Cho phép truyền nhận dữ liệu từ form 
app.use(bodyParser.json({ type: 'application/json' }));

app.use('/movies',movieRouter);

// GET ALL MOVIES [GET: /]
app.get('/', (req,res) => {
    return res.redirect('/movies');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING AT: 127.0.0.1:' + PORT);
});
