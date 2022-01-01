const express = require('express');
const UserCtrl = require('../controllers/user.ctrl');

const userCtrl = new UserCtrl;

const router = express.Router();

router.route('').get(userCtrl.getAll).post(userCtrl.insert);
router.route('/:id').get(userCtrl.get).put(userCtrl.update).delete(userCtrl.delete);
router.route('/login').post(userCtrl.logIn);

module.exports = router;