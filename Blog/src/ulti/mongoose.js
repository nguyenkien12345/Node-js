// Với template handlebars chúng ta phải chuyển từng documentation thành toObject 
// (Vì template engine này có lỗi bảo mật nên chúng ta phải làm theo cách này (Không phải template engine nào cũng áp dụng))
module.exports = {
    // Hàm xử lý với array
    mutipleMongooseToObject: function(mongooseArrays){
        return mongooseArrays.map(mongoose => mongoose.toObject());
    },

    // Hàm xử lý với 1 documentation
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
