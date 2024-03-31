const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exHandlebars = require('express-handlebars');
const route = require('./routes');
const methodOverride = require('method-override');
// Database Connection
const db = require('./config/db');
db.connectDB();

// Init
const port = 3000;
const app = express();
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', exHandlebars.engine({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'./resources/views'))

// Static file
app.use(express.static(path.join(__dirname,'public')));

// Route
route(app);

app.listen(port,()=>{
    console.log(`Example is running at port http://localhost:${port}`);
});