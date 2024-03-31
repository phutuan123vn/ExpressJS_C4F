const Course = require('../models/Course');
const { mongooseToObj } = require('../../utils/MongooseToObj');

class HomeController {
    index(req, res, next){
        Promise.all([Course.countDocumentsWithDeleted({deleted: true}),
            Course.findWithDeleted({deleted: {$ne: true}})])
            .then(([deletedCount,courses]) => {
                const [course,hasItem] = mongooseToObj(courses);
                res.render('home', {course,hasItem,deletedCount});
            }).catch(e => console.log(e));
        // Course.countDocumentsWithDeleted({deleted: true})
        //     .then(deletedCount => console.log('deleted ',deletedCount))
        //     .catch(e => console.log(e));
        // Course.findWithDeleted({deleted: {$ne: true}}) // $ne: true => deleted: false
        //     .then(courses => {
        //         const [course,hasItem] = mongooseToObj(courses);
        //         res.render('home', {course,hasItem});
        //     }).catch(e => console.log(e));
        
    }
    // [GET] /search
    search(req, res, next){
        res.render('home/search')
    }
}

module.exports = new HomeController;