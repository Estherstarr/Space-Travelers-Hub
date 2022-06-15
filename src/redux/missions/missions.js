import axios from 'axios';

const FETCH_MISSIONS = 'bookstore/src/redux/books/FETCH_MISSIONS';
const LAND_SURVEY = 'bookstore/src/redux/books/LAND_SURVEY';

const URL = 'https://api.spacexdata.com/v3/missions';

const init = {
  name: 'hector', idea: 'remberence', field: 'air conditioning', status: 'research',
};

export default function missionReducer(state = [init], action) {
  switch (action.type) {
    case FETCH_MISSIONS: {
      return action.payload;
    }

    case LAND_SURVEY:
      return {
        name: 'hector', idea: 'remberence', field: 'air conditioning', status: 'research',
      };
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
