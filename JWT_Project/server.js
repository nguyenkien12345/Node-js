// Xử các Api lên quan đếcn việc đọc và ghi dữ liệu cho book

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();                                        // Khai báo dotenv
const app = express();                                  // Khai báo express
const PORT =  5000;                                     // PORT 5000
app.use(express.json());                                // Express Middleware nhận dữ liệu json được submit lên từ client

const books = [
    {
        id: 1,
        name: 'Liverpool Fc',
        author: 'Trung Kien'
    },
    {
        id: 2,
        name: 'Manchester Utd',
        author: 'Cong Khoa'
    },
    {
        id: 3,
        name: 'Manchester City',
        author: 'Long Hai'
    }
]

// (Khi truy cập route này, thì nó sẽ kiểm tra coi người dùng đã đăng nhập chưa thông qua authenToken. Nếu chưa thì không cho truy cập)
app.get('/books', authenToken ,(req,res) => {
    res.json({status: 'Success', data: books});
})

// Middleware
function authenToken(req, res, next){
    const authorizationHeader = req.headers['authorization'];                // Lấy ra field header
    const token = authorizationHeader.split(' ')[1];                         // authorization khi gửi lên từ phía client sẽ có dạng 'Beaer [token]'. Ta sẽ chỉ lấy token thôi
    if(!token) 
    {
        res.sendStatus(401);                                    
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {      // Kiểm tra token có hợp lệ hay không
        if(err){
            res.sendStatus(403);                                             // Lỗi không có quyền để truy xuất vô route
        }
        next();                                                              // Nếu token hợp lệ thì logic trong route books sẽ được thực thi
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})