const express = require('express');
const {createCourse , enroll } = require('../controllers/courseController');
const router = express.Router();
const {authenticate } = require('../middlewares/auth')

router.post('/courses', authenticate,  createCourse);
router.post('/enrollment',enroll);

module.exports = router;