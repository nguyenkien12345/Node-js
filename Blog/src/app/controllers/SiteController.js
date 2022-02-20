const {mongooseToObject, mutipleMongooseToObject} = require('../../ulti/mongoose');

const Club = require('../models/Club');

class SiteController {
    // [GET] Path: /
    index(req, res, next) {
        Club.find({})
        .then(clubs => {
            // trả về view home và truyền đi dữ liệu clubs  
            res.render('home', {
                clubs: mutipleMongooseToObject(clubs)
            })
        })
        .catch(next);  // catch(next) này chính là cách viết ngắn gọn của catch(error => next(error)) 
    }
    //Luồng chạy: Vào Controller chọc vào Models (Club) lấy ra dữ liệu (clubs) mang về Controller sau đó chọc sang view (home) và truyền data lấy từ models (clubs) truyền sang view. 

    // [GET] Path: /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
