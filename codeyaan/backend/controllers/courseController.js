const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');


const createCourse = async (req, resp)=>{
    try{

        const {title, description , department , visibility } = req.body;
        const course = await Course.create({
            title, description , department , visibility,
             owner: req.user._id
        })

        resp.json(course)
    }catch(err){
    console.error(err);
    resp.status(500).json({message: 'Error creating course'});
    } 
};


const enroll = async (req, resp,)=>{
    try{

        const exist = await Enrollment.findOne({course: req.resource._id, student: req.user._id });
        if (exist) return res.status(400).json({ message: 'Already enrolled' });
        const enroll = await Enrollment.create({course: req.resource.id, student: req.user._id })
        resp.json(enroll);
    }catch(err){
        console.error(err);
        resp.status(500).json({message:'Error enrolling'})
    }
}

module.exports = {createCourse , enroll}
