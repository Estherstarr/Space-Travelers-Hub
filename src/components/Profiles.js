import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';

function Profiles() {
  const rockets = useSelector((state) => state.rocketList);
  const myRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="container my_profil">
      <div className="side_card">
        <h2>My Rockets</h2>
        <Profile myRockets={myRockets} />
      </div>
    </div>
  );
}

export default Profiles;
