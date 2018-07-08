import { CHANGE_EDITOR_TAB } from '../actions/nav';

const reducer = (state = {
  tab: 'javascript'
}, action) => {
  switch (action.type) {
  case CHANGE_EDITOR_TAB:
    return { ...state, tab: action.tab };
  default:
    return state;
  }
};

export default reducer;
