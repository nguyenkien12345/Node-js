const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.get('/:slug', productController.show);

// Lưu ý những tuyến đường gốc (index) phải luôn để dưới cùng vì nó đọc từ trên xuống
router.get('/', productController.index);

module.exports = router;
