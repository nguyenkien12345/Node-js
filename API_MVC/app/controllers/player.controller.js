const Player = require('../models/player.model');

function getAllPlayer(req,res){
    Player.getAll((data) => {
        res.send({result: data});
    })
}

function getDetailPlayer(req,res){
    Player.getDetail(req.params.id, (data) => {
        res.send({result: data});
    })
}

function addNewPlayer(req,res){
    var data = req.body;
    Player.addNew(data, (player)=>{
        res.send({result: player});
    })
}

function updatePlayer(req,res){
    var data = req.body;
    Player.edit(data, (player)=>{
        res.send({result: player});
    })
}

function deletePlayer(req,res){
    Player.remove(req.params.id, (data)=>{
        res.send({result: data});
    })
}

module.exports = {getAllPlayer, getDetailPlayer, addNewPlayer, deletePlayer, updatePlayer};