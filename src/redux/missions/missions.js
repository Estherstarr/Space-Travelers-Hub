import axios from 'axios';

const FETCH_MISSIONS = 'Space-Travelers-Hub/src/redux/missions/FETCH_MISSIONS';

const URL = 'https://api.spacexdata.com/v3/missions';

const init = {};

// const leaveMission = <button >Leave mission</button>;
// const joinMission = <button className="join-btn">join Mission</button>;

export default function missionReducer(state = [init], action) {
  switch (action.type) {
    case FETCH_MISSIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}

export const displayMissions = (payload) => ({ type: FETCH_MISSIONS, payload });

export const getMissions = () => (dispatch) => {
  axios.get(URL).then((response) => {
    const { data } = response;
    dispatch({ type: FETCH_MISSIONS, payload: data });
  });
};
