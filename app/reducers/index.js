import { combineReducers } from 'redux';

import user from './user';
import playlist from './playlist';

const rootReducer = combineReducers({
  user,
  playlist
});

export default rootReducer
