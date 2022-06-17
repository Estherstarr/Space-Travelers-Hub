import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';

const allReducers = combineReducers({
  missions: missionReducer,
});
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
