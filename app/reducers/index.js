import { combineReducers } from 'redux';

import user from './user';
import playlist from './playlist';
import search from './search';

const rootReducer = combineReducers({
  user,
  playlist,
  search
});

export default rootReducer
