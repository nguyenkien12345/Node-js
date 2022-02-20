const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete'); // Xoá mềm

const Schema = mongoose.Schema; 

const Club = new Schema({
    Name: {type: String, require, minLength: 3, maxLength: 64},
    Donors: {type: String, require, minLength: 3, maxLength: 64},
    Nickname: {type: String, require, minLength: 3, maxLength: 64},
    Thumbnail: {type: String, require, minLength: 3, maxLength: 255},
    Slug: {type: String, slug: "Name", unique: true}, // Slug sẽ được generator từ thằng Name, unique: true đảm bảo không bao giờ có 2 slug giống nhau
    VideoID: {type: String},
},{
    timestamps: true, // Tự tạo ra trường createdAt và updatedAt
});

// Add Plugin (Có 2 cách add plugin)
mongoose.plugin(slug);                                // Cách 1: Add plugin slug 
Club.plugin(mongooseDelete, {                         // Cách 2: Add plugin mongooseDelete. {overrideMethods: 'all'} Cho phép tất cả các phương thức của mongooseDelete ghi đè tất cả các phương thức mongoose
    overrideMethods: 'all',
    deletedAt: true                                   // Thêm trường deletedAt vào database mongoose
});       

module.exports = mongoose.model("Club", Club); // "Club", Club: Club 1 là model name, Club 2 là schema

// Khi mà kết nốt với MongoDB Compass nó sẽ tự chuyển model name về dạng LowerCase (nếu có nhiều từ thì nó sẽ tự cách nhau bằng gạch dưới) sau đó chuyển 
// thành số nhiều để suy ra collection. 
// Shema: Lược đồ. Validate ở tầng model