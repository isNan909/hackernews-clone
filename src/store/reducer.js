import { combineReducers } from 'redux';

import story from './story/story.reducer';
import comment from './comments/comments.reducer';

const rootReducer = combineReducers({
  story,
  comment,
});

export default rootReducer;
