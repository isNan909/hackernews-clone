import { combineReducers } from 'redux';
import app from '../components/App/app';

import story from './story/story.reducer';

const rootReducer = combineReducers({
  app,
  story,
});

export default rootReducer;
