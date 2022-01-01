const setRoutes = (app) => {
    app.use('/api/blog', require('./blog.route'));
    app.use('/api/users', require('./user.route'));
    
    app.get('/hello', (req, res, next) => {
        res.json({ message: 'Hello From NodeJS' });
    })
}

module.exports = { 'setRoutes': setRoutes };