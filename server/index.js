// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const { setupWebsocket,checking } = require('./src/utils/websocket.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(cors());

// Placeholder routes and controllers
const authRoutes = require('./src/routes/authRoutes');
const conferenceRoutes = require('./src/routes/conferenceRoutes');
const participantRoutes = require('./src/routes/participantRoutes');

// Set up routes
app.use('/api/auth', authRoutes);
app.use('/api/conference', conferenceRoutes);
app.use('/api/participant', participantRoutes);

// Set up websocket
setupWebsocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
