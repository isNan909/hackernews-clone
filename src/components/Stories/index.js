import { connect } from 'react-redux';
import actions from '../../store/story/story.actions';
import { Storywrapper } from '../storywrapper.component';
import { hasMoreStoriesSelector } from '../../store/story/selector';

const mapStateToProps = (state) => ({
  stories: state.story.stories,
  page: state.page,
  storyIds: state.story.storyIds,
  isFetching: state.isFetching,
  hasMoreStories: hasMoreStoriesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialStories: () => dispatch(actions.fetchStoryIds()),
  fetchStories: ({ storyIds, page }) =>
    dispatch(actions.fetchStories({ storyIds, page })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Storywrapper);
  