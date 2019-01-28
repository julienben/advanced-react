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

function homeReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'UPDATE_TWEET':
      return Object.assign(newState, {
        text: action.text,
        remainingChars: calculateRemainingChars(action.text, state.photoAdded),
        ...calculateOverflowTexts(action.text, state.photoAdded),
      });
    case 'TOGGLE_PHOTO':
      const newPhotoAdded = !state.photoAdded; // eslint-disable-line no-case-declarations
      return Object.assign(newState, {
        photoAdded: newPhotoAdded,
        remainingChars: calculateRemainingChars(newState.text, newPhotoAdded),
        ...calculateOverflowTexts(newState.text, newPhotoAdded),
      });
    default:
      return state;
  }
}

export default homeReducer;
