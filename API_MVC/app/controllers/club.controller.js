const Club = require('../models/club.model');

function getAllClub(req,res){
    Club.getAll((data) => {
        res.send({result: data});
    })
}

function getDetailClub(req,res){
    Club.getDetail(req.params.id, (data) => {
        res.send({result: data});
    })
}

function addNewClub(req, res){
    // Để sử dụng req.body phải cài gói body-parser (Lấy dữ liệu được nhập từ form về)
    var data = req.body;
    Club.addClub(data, (club) => {
        res.send({result: club});
    })
}

function deleteClub(req, res){
    var id = req.params.id;
    Club.remove(id, (result) => {
        res.send({result: result});
    })
}

function updateClub(req, res){
    var data = req.body;
    Club.edit(data, (club) => {
        res.send({result: club});
    })
}

module.exports = {getAllClub, getDetailClub, addNewClub, deleteClub, updateClub};