const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/')
    .delete(authController.logout);

router.route('/register')
    .post(authController.register);

router.route('/login')
    .post(authController.login);

router.route('/session/:sid')
    .get(authController.validateSession);

module.exports = router;