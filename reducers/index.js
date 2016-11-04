// reducers/index.js
import { SAVE, LIST, DELETE } from '../actions';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return ;
    case LIST:
      return ;
    case DELETE:
      return ;
    default:
      return state;
  }
};
