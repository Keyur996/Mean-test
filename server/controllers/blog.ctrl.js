const BaseCtrl=require("./base.ctrl");
const Blog = require('../models/blog.model');
const blogModel=require("../models/blog.model");

class BlogCtrl extends BaseCtrl {
    model = Blog;
    constructor() {
        super();
    }
    
    test = (req, res) => {
        res.json({ 'api': 'Hello' });
    }
}

module.exports = BlogCtrl;