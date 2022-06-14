import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <header>
      <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo" />
      <h2>Space Traveler&apos;s Hub</h2>
      <nav>
        <Link to="/rockets" className="menu-item1">Rockets</Link>
        <Link to="/missions" className="menu-item2">Missions</Link>
        <Link to="/" className="menu-item3">My profile</Link>
      </nav>
    </header>
  );
}

export default Navbar;
