// server/routes/participantRoutes.js
const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

// Placeholder routes
router.post('/join', participantController.joinConference);
router.post('/raiseHand', participantController.raiseHand);

module.exports = router;
