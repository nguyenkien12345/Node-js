const {mongooseToObject, mutipleMongooseToObject} = require('../../ulti/mongoose');

const Club = require('../models/Club');

class MeController {

    // [GET] /me/stored/clubs
    storedClubs(req, res, next){
        Club.find({})
        .then(clubs => {
            res.render('me/storedClubs', {
                clubs: mutipleMongooseToObject(clubs)
            })
        })
        .catch(next)
    }

    // [GET] /me/trash/clubs
    trashClubs(req, res, next){
        Club.findDeleted({})                            // findDeleted là phương thức của thư viện mongoose-delete. Lấy ra danh sách các khoá học đã xoá
        .then(clubs => {
            res.render('me/trashClubs', {
                clubs: mutipleMongooseToObject(clubs)
            })
        })
        .catch(next)
    }
}

module.exports = new MeController();
