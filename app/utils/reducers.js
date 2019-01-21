import { combineReducers } from 'redux';
import homeReducer from '../containers/TweetBox/reducer';

export default combineReducers({
  home: homeReducer,
});
