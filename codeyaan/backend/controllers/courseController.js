const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');


exports.createCourse = async (req, resp)=>{
    try{

        const {tital, description , department , visibility } = req.body;
        const course = await Course.create({
            tital, description , department , visibility,
             owner: req.user._id
        })

        resp.json(course)
    }catch(err){
    console.error(err);
    resp.status(500).json({message: 'Error creating course'});
    } 
};


exports.enroll = async (req, resp,)=>{
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

