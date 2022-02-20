class ProductController {
    // [GET] Path: /product
    index(req, res) {
        res.render('product');
    }

    // [GET] Path: /product/:slug
    show(req, res) {
        res.send('Product Detail');
    }
}

module.exports = new ProductController();
