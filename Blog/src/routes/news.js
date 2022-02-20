const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);

// Lưu ý những tuyến đường gốc (index) phải luôn để dưới cùng vì nó đọc từ trên xuống 
router.get('/', newsController.index);

module.exports = router;
