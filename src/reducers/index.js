import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CreateReducer from './CreateReducer';

export default combineReducers({
  auth: AuthReducer,
  create: CreateReducer
});
