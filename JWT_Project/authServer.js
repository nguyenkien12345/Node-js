// Xử lý phần đăng nhập, đăng xuất

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();                                        // Khai báo dotenv
const app = express();                                  // Khai báo express
const PORT =  5500;                                     // PORT 5500
app.use(express.json());                                // Express Middleware nhận dữ liệu json được submit lên từ client

app.post('/login', (req,res) => {
    const data = req.body;                                                                  // Lấy ra thông tin req mà người dùng submit lên
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '30s'}); // Dữ liệu payload, secret_key, thời gian hết hạn của token này
    const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET);                  // Khi jwt gần hết hạn phía client sẽ sử dụng refreshToken này để gửi lên route refresh token để tạo ra 1 token mới
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });                                                // Trả thông tin accessToken, refreshToken này về client
})


let refreshTokens = [];

app.post('/refreshToken', (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) {
    res.sendStatus(401);  // UnAuthorize
  }
  if (!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403)  // Không có quyền gọi đến route này 
  };
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
    if (err) {
        res.sendStatus(403);
    }
    // Nếu như hợp lệ
    const accessToken = jwt.sign(
      { username: data.username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '30s',
      }
    );
    res.json({ accessToken }); // Trả thông tin accessToken này về client
  });
});

app.post('/logout', (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken);
    res.sendStatus(200);
  });

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})