import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './Countries/countries';

const reducer = combineReducers({
  countryReducer,
  // additional reducers could be added here
});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
