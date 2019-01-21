export const initialState = {
  text: '',
  photoAdded: false,
};

function homeReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'UPDATE_TWEET':
      newState.text = action.text;
      return newState;
    default:
      return state;
  }
}

export default homeReducer;
