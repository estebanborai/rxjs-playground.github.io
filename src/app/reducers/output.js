import { CHANGE_OUTPUT_TAB } from '../actions/nav';

const reducer = (state = {
  tab: 'console'
}, action) => {
  switch (action.type) {
  case CHANGE_OUTPUT_TAB:
    return { ...state, tab: action.tab };
  default:
    return state;
  }
};

export default reducer;
