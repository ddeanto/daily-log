import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CreateReducer from './CreateReducer';
import ItemsReducer from './ItemsReducer';

export default combineReducers({
  auth: AuthReducer,
  create: CreateReducer,
  items: ItemsReducer
});
