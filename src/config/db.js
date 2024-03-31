const mongoose = require('mongoose');
// mongodb://localhost:27017/ExpressDB/
async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = {connectDB} ;