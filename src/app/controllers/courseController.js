const Course = require('../models/Course');
const mongoose = require('mongoose');
const { mongooseToObj } = require('../../utils/MongooseToObj');
class CouresController {
    // GET index page 
    index(req, res, next){
        Course.findWithDeleted({deleted: {$ne: true}}) // $ne: true => deleted: false
            .then(courses => {
                const [course,hasItem] = mongooseToObj(courses);
                // res.json({course,hasItem});
                res.render('courses', {course,hasItem});
            }).catch(e => console.log(e));
    }
    // GET create page
    create(req, res, next){
        res.render('course/create');
        
    }
    //GET view item page
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(courseSchema => {
                res.render('course/show', {course: courseSchema.toObject()});
                // res.send({course: courseSchema.toObject()});
            })
            .catch(next);

    }
    // POST add course
    store(req, res, next){
        const formData = req.body;
        const course = new Course(formData);
        // Save document
        course.save()
            .then(() => {
                res.redirect('/course');
            })
            .catch(err => {
                console.error(err);
            });
    }
    // Page update course
    edit(req, res, next){
        Course.findOne({_id: req.params.id})
            .then(course => {
                res.render('course/edit', {course: course.toObject()});
                // res.json({courseSchema});

            })
            .catch(next);
    }
    // PUT update course
    editAll(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/course');
            })
            .catch(next);
    }
    // PATCH update course
    editField(req, res, next){
        res.send('Update course');
    }
    // DELETE course
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('/course');
            })
            .catch(next);
    }
    // Soft delete course
    /* return result is {
            acknowledged: true,
            modifiedCount: 1,
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1
        }
    */
    softDelete(req, res, next){
        Course.delete({_id: req.params.id})
            .then((result) => {
                res.redirect('back');
            })
            .catch(next);
    }
    //[PATCH] restore course
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
    // trash course
    trash(req, res, next){
        Course.findDeleted({})
            .then((courses) => {
                const newCourses = courses.filter((course) => course.deleted === true);
                const [course,hasItem] = mongooseToObj(newCourses);
                // res.json({course: course,hasItem: hasItem});
                res.render('trash', {
                    course,
                    hasItem,
                    // layout: 'main'
                    // partial: 'header2'
                });
            })
            .catch(next);
    }
    // remove all course
    actionAll(req, res, next){
        const courseIDs = req.body.courseIDs;
        const action = req.body.action;
        switch(action){
            case 'restore':
                Course.restore({_id: {$in: courseIDs}})
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;
            case 'remove':
                Course.delete({_id: {$in: courseIDs}})
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;

            case 'delete':
                Course.deleteOne({_id: {$in: courseIDs}})
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;
            default:
                res.json({message: 'Action is invalid'});
        }
    }
    
}

module.exports = new CouresController;