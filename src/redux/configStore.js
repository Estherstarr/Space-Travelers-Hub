import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { ThunkMiddleware } from "redux-thunk";
import thunk from 'redux-thunk';
import missionReducer, { getMissions } from './missions/missions';

const allReducers = combineReducers({
  missionReducer,
});
const store = createStore(allReducers, applyMiddleware(thunk));

store.dispatch(getMissions);

export default store;
