import { UPDATE_TWEET, TOGGLE_PHOTO } from './constants';

export function updateTweet(text) {
  return {
    type: UPDATE_TWEET,
    text,
  };
}

export function togglePhoto() {
  return {
    type: TOGGLE_PHOTO,
  };
}
