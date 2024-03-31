const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);


const Schema = mongoose.Schema;

const Course = new Schema({
    title: {type: String, maxLength: 255, required: true},
    description: {type: String},
    videoID: {type: String},
    level: {type: String},
    slug: {type: String, slug: 'title', unique: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
}, {timestamps: true});

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    indexFields: ['deletedAt'],
});

module.exports = mongoose.model('courses', Course);