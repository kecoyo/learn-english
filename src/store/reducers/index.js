import { combineReducers } from 'redux';
import userReducer from './user';
import modulesReducers from '@/modules/reducers';

const reducers = combineReducers({
  user: userReducer,
  modules: modulesReducers,
});

export default reducers;
