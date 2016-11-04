// actions/index.js
// Namespace actions
export const SAVE = 'reduxr/SAVE';
export const LIST = 'reduxr/LIST';
export const DELETE = 'reduxr/DELETE';

export const saveTweet = () => {
  return {
    type: SAVE
  }
}

export const listTweets = () => {
  return {
    type: LIST
  }
}

export const deleteTweet = () => {
  return {
    type: DELETE
  }
}
