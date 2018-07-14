import { CHANGE_TAB } from '../actions/editor';

const reducer = (state = {
  activeTab: 'index.js'
}, action) => {
  switch (action.type) {
  case CHANGE_TAB:
    return { ...state, activeTab: action.next };
  default:
    return state;
  }
};

export default reducer;
