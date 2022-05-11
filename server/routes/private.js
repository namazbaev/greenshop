const express = require('express');
const { getPrivateData } = require('../controllers/private');
const authMiddleWare = require('../middleware/auth')
const router = express.Router();
const { protect } = authMiddleWare
router.get('/', protect, getPrivateData);

module.exports = router;