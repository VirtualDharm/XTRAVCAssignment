// server/controllers/participantController.js
const { Conference } = require('../models/Conference');

const joinConference = async (req, res) => {
  const { participantName, conferenceId } = req.body;

  try {
    // Check if the conference exists
    const conference = await Conference.findByPk(conferenceId);
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' });
    }

    // Implement join conference logic here
    // For simplicity, let's assume joining a conference involves adding the participant to the conference's participant list
    // You might want to handle more complex logic, like generating unique participant IDs

    // Example:
    conference.participants.push({ name: participantName });
    await conference.save();

    // Notify all participants about the new join
    io.to(conferenceId).emit('participantJoined', { participantName });

    return res.status(200).json({ message: 'Participant joined successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const raiseHand = async (req, res) => {
  const { conferenceId, participantId } = req.body;

  try {
    // Implement raise hand logic here
    // For simplicity, let's assume raising hand involves updating a participant's status in the conference

    // Example:
    const conference = await Conference.findByPk(conferenceId);
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' });
    }

    const participant = conference.participants.find((p) => p.id === participantId);
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    // Update participant's hand raised status
    participant.handRaised = true;
    await conference.save();

    // Notify the host about the raised hand
    io.to(conference.hostSocketId).emit('participantRaisedHand', { participantId });

    return res.status(200).json({ message: 'Hand raised successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  joinConference,
  raiseHand,
};
