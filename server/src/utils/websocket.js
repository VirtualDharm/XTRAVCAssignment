// server/utils/websocket.js
let io;

function setupWebsocket(serverIo) {
  io = serverIo;

  io.on('connection', (socket) => {
    console.log('WebSocket connected');

    // Handle WebSocket events here

    socket.on('joinConference', (data) => {
      // Handle logic when a participant joins the conference
      socket.join(data.conferenceId);

      // Broadcast to other participants that a new participant has joined
      socket.to(data.conferenceId).broadcast.emit('participantJoined', {
        participantId: socket.id,
        participantName: data.participantName,
      });
    });

    socket.on('raiseHand', (data) => {
      // Handle logic when a participant raises hand
      io.to(data.conferenceId).emit('participantRaisedHand', { participantId: socket.id });
    });

    socket.on('disconnect', () => {
      // Handle logic when a participant disconnects
      const rooms = Object.keys(socket.rooms);
      rooms.forEach((room) => {
        // Broadcast to other participants that a participant has left
        socket.to(room).broadcast.emit('participantLeft', { participantId: socket.id });
      });
    });
  });
}

module.exports = {
  setupWebsocket,
  // Add more websocket functions if needed
};
