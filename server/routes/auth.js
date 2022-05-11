const express = require('express');
const auth = require('../controllers/auth');
const router = express.Router();
const { register, login, forgotPassword, resetPassword } = auth
router.post('/login', login);
router.post('/register', register);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

module.exports = router;