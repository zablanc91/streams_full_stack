//proxy for API calls from front end (port 3000) to back end (port 2000)
//no need to import this file, automatically registered when dev server started
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        '/auth/google',
        createProxyMiddleware({target: 'http://localhost:2000'})
    );

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:2000',
            secure: false
        })
    ); 
};