const homeRoute = require('./homeRoute');
const coursesRoute = require('./courseRoute');


function route(app){
    app.use('/', homeRoute);
    app.use('/home', homeRoute);
    app.use('/course', coursesRoute);
}

// module.exports = route;
module.exports = route;