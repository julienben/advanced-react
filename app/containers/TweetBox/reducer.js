import produce from 'immer';
import { UPDATE_TWEET, TOGGLE_PHOTO } from './constants';

export const initialState = {
  text: '',
  photoAdded: false,
  remainingChars: 280,
  overflowText: '',
  beforeOverflowText: '',
};

const calculateRemainingChars = (text, photoAdded) => {
  let chars = 280 - text.length;
  if (photoAdded) chars -= 23;
  return chars;
};

const calculateOverflowTexts = (text, photoAdded) => {
  const imageLength = photoAdded ? 23 : 0;
  return {
    overflowText: text.substring(280 - imageLength),
    beforeOverflowText: text.substring(
      280 - imageLength - 10,
      280 - imageLength,
    ),
  };
};

/* eslint-disable default-case, no-param-reassign */
const tweetBoxReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_TWEET:
        draft.text = action.text;
        break;
      case TOGGLE_PHOTO:
        draft.photoAdded = !state.photoAdded;
        break;
    }

    // Update remainingChars in all cases
    draft.remainingChars = calculateRemainingChars(
      draft.text,
      draft.photoAdded,
    );

    // Update overflowTexts in all cases
    const { overflowText, beforeOverflowText } = calculateOverflowTexts(
      draft.text,
      draft.photoAdded,
    );
    draft.overflowText = overflowText;
    draft.beforeOverflowText = beforeOverflowText;
  });

export default tweetBoxReducer;
