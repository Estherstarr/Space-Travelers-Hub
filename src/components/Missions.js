import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMissions } from '../redux/missions/missions';
// import axios from 'axios';

// const missionsAPI = 'https://api.spacexdata.com/v3/missions';
// axios.get(missionsAPI).then((res) => res.data).then((r) => console.log(r));

function Missions({ getInfo }) {
  const data = useSelector((state) => state.missionReducer);
  useEffect(() => {
    getInfo();
  }, []);

  const displayID = () => {
    // console.log( e.target.id);
  };
  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th className="mission-title">Mission</th>
          <th className="mission-description">Description</th>
          <th className="mission-status">status</th>
          <th className="mission-status"> </th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr key={row.mission_id}>
              <td>{row.mission_name}</td>
              <td>{row.description}</td>
              <td><button type="button" className="membership-btn">NOT A MEMBER</button></td>
              <td><button type="button" id={row.mission_name} onClick={displayID} className="join-btn">join Mission</button></td>
            </tr>
          ))

        }
      </tbody>

    </table>
  );
}

const dispatchToProps = (dispatch) => ({ getInfo: () => dispatch(getMissions()) });

Missions.propTypes = {
  getInfo: PropTypes.func,
};

Missions.defaultProps = {
  getInfo: '',
};

export default connect(null, dispatchToProps)(Missions);

// export default Missions;
