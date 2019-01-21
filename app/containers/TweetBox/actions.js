export function updateTweet(text) {
  return {
    type: 'UPDATE_TWEET',
    text,
  };
}
