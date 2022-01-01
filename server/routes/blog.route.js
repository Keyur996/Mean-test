const express = require('express');
const BlogCtrl = require('../controllers/blog.ctrl');

const blogCtrl = new BlogCtrl;

const router = express.Router();
router.route('').get(blogCtrl.getAll).post(blogCtrl.insert);
router.route('/:id').get(blogCtrl.get).put(blogCtrl.update).delete(blogCtrl.delete);
router.route('/count').get(blogCtrl.count);

module.exports = router;