import { combineReducers } from 'redux';

import story from './story/story.reducer';

const rootReducer = combineReducers({
  story,
});

export default rootReducer;
