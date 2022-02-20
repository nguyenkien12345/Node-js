const db = require('../common/connect');

const Club = function(club){
    this.id = club.id;
    this.name = club.name;
}

Club.getAll = function(callback){
    db.query('SELECT * FROM club', (err,clubs) => {
        if(err){
            callback(err);
        }
        else{
            callback(clubs);
        }
    })
}

Club.getDetail = function(id, callback){
    db.query(`SELECT * FROM club WHERE id = ${id}`, (err,club) => {
        if(err){
            callback(err);
        }
        else if(club.length === 0){
            callback(`Không tìm thấy câu lạc bộ có id là ${id}`);
        }
        else{
            // Ta chỉ muốn trả về 1 đối tượng chứ không trả về 1 mảng
            callback(club[0]);
        }
    })
}

Club.addClub = function(data,callback){
    // ? sẽ được mapping với data
    db.query('INSERT INTO club SET ?', data, (err, club) => {
        if(err){
            callback(err);
        }
        else{
            // insertId: id tự tăng, ... gán cái id tự tăng vào cho cái data 
            callback({id: club.insertId, ...data});
        }
    });
}

Club.remove = function(id,callback){
    db.query(`DELETE FROM club WHERE id = ${id}`, (err,club) => {
        if(err){
            callback(err);
        }
        else if(club.length === 0){
            callback(`Không tìm thấy câu lạc bộ có id là ${id}`);
        }
        else{
            callback(`Xoá thành công câu lạc bộ có id là ${id}`);
        }
    })
}

Club.edit = function(data,callback){
    // ? thứ 1 sẽ được mapping với data.name,  ? thứ 2 sẽ được mapping với data.id
    db.query('UPDATE club SET name=? Where id=?',[data.name,data.id], (err) => {
        if(err) {
            callback(err);
        }
        else{
            callback(data)
        }
    })
}

module.exports = Club;