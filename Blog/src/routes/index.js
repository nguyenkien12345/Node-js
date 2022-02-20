const clubRouter = require('./club');
const newRouter = require('./news');
const productRouter = require('./product');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    app.use('/clubs', clubRouter);

    app.use('/me', meRouter);

    app.use('/news', newRouter);
    
    app.use('/product', productRouter);

    // Lưu ý những tuyến đường gốc (index) phải luôn để dưới cùng vì nó đọc từ trên xuống
    app.use('/', siteRouter);
}

module.exports = route;
