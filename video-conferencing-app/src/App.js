import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import HostView from './components/Host/HostView';
import ParticipantView from './components/Participant/ParticipantView';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Define routes for Login, Signup, HostView, and ParticipantView */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/host" element={<HostView />} />
          <Route path="/participant" element={<ParticipantView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
