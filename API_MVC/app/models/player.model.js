const db = require('../common/connect');

const Player = function (player){
    this.id = player.id;
    this.name = player.name;
    this.age = player.age;
    this.clubId = player.clubId;
}

Player.getAll = function(callback){
    db.query('SELECT * FROM player', (err,players) => {
        if(err){
            callback(err);
        }
        else{
            callback(players);
        }
    })
}

Player.getDetail = function(id,callback){
    db.query(`SELECT * FROM player Where id = ${id}`, (err,player) => {
        if(err){
            callback(err);
        }
        else if(player.length === 0){
            callback(`Không tìm thấy cầu thủ có id là ${id}`);
        }
        else{
            callback(player[0]);
        }
    })
}

Player.addNew = function(player,callback){
    db.query('INSERT INTO player(name,age,clubId) values (?,?,?)', [player.name,player.age,player.clubId], (err) => {
        if(err){
            callback(err);
        }
        else{
            callback(player);
        }
    })
}

Player.edit = function(player,callback){
    db.query('UPDATE player SET name=?, age=?, clubId=? WHERE id=?', [player.name,player.age,player.clubId,player.id], (err) => {
        if(err){
            callback(err);
        }
        else{
            callback(player);
        }
    })
}

Player.remove = function(id,callback){
    db.query(`DELETE FROM player WHERE id = ${id}`, (err,player) => {
        if(err){
            callback(err);
        }
        else if(player.length === 0){
            callback(`Không tìm thấy cầu thủ có id là ${id}`);
        }
        else{
            callback(`Xoá thành công cầu thủ có id là ${id}`);
        }
    })
}

module.exports = Player;