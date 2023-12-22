// components/Participant/ParticipantView.js
import React, { useState } from 'react';

const ParticipantView = () => {
  const [participantName, setParticipantName] = useState('');

  const handleJoin = () => {
    // Implement join logic here
  };

  return (
    <div>
      <h2>Participant View</h2>
      <label>Enter Your Name:</label>
      <input type="text" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
      <button type="button" onClick={handleJoin}>Join</button>
      {/* Add Participant View UI elements */}
    </div>
  );
};

export default ParticipantView;
