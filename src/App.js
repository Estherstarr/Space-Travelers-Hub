import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <section className="container">
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </section>
  );
}

export default App;
