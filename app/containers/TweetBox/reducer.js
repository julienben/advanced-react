export const initialState = {
  text: '',
  photoAdded: false,
  remainingChars: 280,
};

const calculateRemainingChars = state => {
  let chars = 280 - state.text.length;
  if (state.photoAdded) chars -= 23;
  return chars;
};

function homeReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'UPDATE_TWEET':
      newState.text = action.text;
      newState.remainingChars = calculateRemainingChars(newState);
      return newState;
    case 'TOGGLE_PHOTO':
      newState.photoAdded = !state.photoAdded;
      newState.remainingChars = calculateRemainingChars(newState);
      return newState;
    default:
      return state;
  }
}

export default homeReducer;
