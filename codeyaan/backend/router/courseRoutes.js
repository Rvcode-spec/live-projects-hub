const express = require('experss');
const {createCourse , enroll } = require('../controllers/courseController');
const route = express.route;

route.post('./')