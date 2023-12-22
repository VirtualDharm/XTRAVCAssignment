// server/routes/conferenceRoutes.js
const express = require('express');
const router = express.Router();
const conferenceController = require('../controllers/conferenceController');

// Placeholder routes
router.post('/create', conferenceController.createConference);
router.get('/:conferenceId', conferenceController.getConference);

module.exports = router;
