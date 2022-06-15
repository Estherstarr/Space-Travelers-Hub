import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
// import axios from 'axios';

// const missionsAPI = 'https://api.spacexdata.com/v3/missions';
// axios.get(missionsAPI).then((res) => res.data).then((r) => console.log(r));

function Missions({ getInfo }) {
  const data = useSelector((state) => state.missionReducer);
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th className="mission-title">Mission</th>
          <th className="mission-description">Description</th>
          <th className="mission-status">status</th>
          <th className="mission-status" />
        </tr>
      </thead>
      <tbody>
        {
      data.map((row) => (
        <tr>
          <td>{row.mission_name}</td>
          <td>{row.description}</td>
          <td><button className="membership-btn">NOT A MEMBER</button></td>
          <td><button className="join-btn">join Mission</button></td>
        </tr>
      ))

    }
      </tbody>
      {/* {
        const rows = document.querySelectorAll('tr')
        rows.forEach(row => {
          if (rows.indexOf(row) % 2 !== 0) {
            row.classList.add('bg-variant')
            console.log(row)

          } })

      } */}
    </table>
  );
}

const dispatchToProps = (dispatch) => ({ getInfo: () => dispatch(getMissions()) });
export default connect(null, dispatchToProps)(Missions);

// export default Missions;
