import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const allReducers = combineReducers({
  rocketList: rocketReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
