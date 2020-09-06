import { connect } from 'react-redux';
import actions from '../../store/story/story.actions';
import App from './app';

const mapStateToProps = (state) => ({
  stories: state.stories,
  page: state.page,
  storyIds: state.storyIds,
  isFetching: state.isFetching,
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchInitialStories: () => dispatch(actions.fetchStoryIds()),
});

export default connect(mapDispatchToProps, mapStateToProps)(App);
 