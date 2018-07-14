const prefix = 'EDITOR';

export const CHANGE_TAB = `${prefix}/CHANGE_TAB`;
export const changeTab = next => dispatch => {
  dispatch({ type: CHANGE_TAB, next });
};
