const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clubs'
}

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if(err) {
        console.log('Kết nối CSDL thất bại');
    }
    else{
        console.log('Kết nối CSDL thành công');
    }
})

module.exports = connection;