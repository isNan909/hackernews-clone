import { combineReducers } from 'redux';
import app from '../App';

import story from './story/story.reducer';

const rootReducer = combineReducers({
  app,
  story,
});

export default rootReducer;
