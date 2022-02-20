const express = require('express');
const app = express();

// Cho phép truyền nhận dữ liệu kiểu JSON
app.use(express.json()); 

const clubs = [
    {id: 1, name: 'Liverpool Fc'},
    {id: 2, name: 'Chelsea Fc'},
    {id: 3, name: 'Arsenal Fc'},
]


app.get('/', (req, res) => {
    res.send('Trang chủ giải Ngoại Hạng Anh');
})

app.get('/api/clubs', (req, res) => {
    res.send(clubs);
})

app.get('/api/clubs/:id', (req, res) => {
    const club = clubs.find(x => x.id === Number(req.params.id));
    if(!club) res.send('Club Not Found');
    res.send(club);
})

app.post('/api/clubs/add', (req, res) => {
    const club = {
        id: req.body.id,
        name: req.body.name,
    }
    clubs.push(club);
    res.send(JSON.stringify({
        success: true,
        notice: "Thêm câu lạc bộ thành công",
        data: clubs
    }));
})

app.put('/api/clubs/edit/:id', (req, res) => {
    const club = clubs.find(x => x.id === Number(req.params.id));
    if(!club) res.send('Club Not Found');
    club.name = req.body.name;
    res.send(JSON.stringify({
        success: true,
        notice: 'Cập nhật câu lạc bộ thành công',
        data: clubs
    }));
})

app.delete('/api/clubs/delete/:id', (req, res) => {
    const club = clubs.find(x => x.id === Number(req.params.id));
    if(!club) res.send('Club Not Found');
    const index = clubs.indexOf(club);
    clubs.splice(index, 1);
    res.send(JSON.stringify({
        success: true,
        notice: 'Xoá câu lạc bộ thành công',
        data: clubs
    }))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

