const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

// Lưu ý những tuyến đường gốc (index) phải luôn để dưới cùng vì nó đọc từ trên xuống
router.get('/', siteController.index);

module.exports = router;
