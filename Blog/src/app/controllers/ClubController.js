const {mongooseToObject} = require('../../ulti/mongoose');

const Club = require('../models/Club');

class ClubController {

    // GET DETAIL CLUB
    // [GET] Path: /clubs/:slug
    show(req, res, next) {
        // So sánh Key (Phải trùng key trong mongoDB Combat) và Value (do bên routes ta để Path /:slug => req.params.slug)
        Club.findOne({Slug: req.params.slug})
        .then(club => {
            // trả về view trong folder clubs file show và truyền đi dữ liệu club  
            res.render('clubs/show', {
                club: mongooseToObject(club)
            })
        })
        .catch(next)
    }

    //Luồng chạy: Vào Controller chọc vào Models (Club) lấy ra dữ liệu (club) mang về Controller sau đó chọc sang view (clubs/show) và truyền data lấy từ models (club) truyền sang view. 

    // [GET] Path: /clubs/create
    // Chỉ hiện thị form để nhập dữ liệu
    create(req, res, next){
        res.render('clubs/create');
    }

    // CREATE CLUB
    // [POST] Path: /clubs/store 
    // Nhận dữ liệu từ form sau đó xử lý và lưu dữ liệu
    store(req, res, next){
        const formData = req.body;
        formData.Thumbnail = `https://dothethao.net.vn/wp-content/uploads/2020/06/logo-${req.body.Name.toLowerCase()}.png`;  // Chúng ta sẽ không nhập thêm Thumbnail bên form mà thay vào đó vì đường dẫn Thumbnail đều giống nhau chỉ khác phần logo-${req.body.Name.toLowerCase()} mà phần này ở form ta đã thêm ở Name nên thay vì phải nhập tay thêm Thumbnail vào form thì ta sẽ tạo ra nó ở đây
        const club = new Club(formData);
        club.save()
            .then(() => res.redirect('/me/stored/clubs'))
            .catch(error => {})
    }

    // UPDATE CLUB
    // [GET] Path: /clubs/:id/edit
    edit(req,res,next){
        Club.findById(req.params.id)
        .then(club => res.render('clubs/edit', {
                club: mongooseToObject(club),
            }))
        .catch(next);
    }

    // [PUT] Path: /clubs/:id
    update(req,res,next){
        Club.updateOne({_id: req.params.id}, req.body)  //{_id: req.params.id} là điền kiện,  req.body là dữ liệu truyền lên
        .then(() => res.redirect('/me/stored/clubs'))   // res.redirect chính là thêm 1 cái key location vào trong header
        .catch(next)
    }

    // [DELETE] Path: /clubs/:id
    destroy(req,res,next){
        Club.delete({_id: req.params.id})              // delete: Nó sẽ tự thêm 1 field delete = true mỗi lần ta bấm xoá. delete là phương thức của thư viện mongoose-delete
        .then(() => res.redirect('back'))              // Sau khi xoá xong nó sẽ chuyển trang về trang trước
        .catch(next)
    }

    // [PATCH] Path: /clubs/:id/restore
    restore(req,res,next){
        Club.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

     // [DELETE] Path: /clubs/:id/force
    forceDestroy(req,res,next){
        Club.deleteOne({_id: req.params.id})           // deleteOne là phương thức của thư viện mongoose        
        .then(() => res.redirect('back'))             
        .catch(next)
    }
}

module.exports = new ClubController();
