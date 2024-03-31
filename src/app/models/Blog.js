const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

const schema = mongoose.Schema;
mongoose.plugin(slug);

const Blog = new schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    slug: {type: String, slug: 'title', unique: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
},{timestamps: true});

module.exports = mongoose.model('blogs', Blog);