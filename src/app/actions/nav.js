const prefix = 'NAV';

export const CHANGE_EDITOR_TAB = `${prefix}/CHANGE_EDITOR_TAB`;
export const changeEditorTab = tab => dispatch => {
  return dispatch({ type: CHANGE_EDITOR_TAB, tab });
};

export const CHANGE_OUTPUT_TAB = `${prefix}/CHANGE_OUTPUT_TAB`;
export const changeOutputTab = tab => dispatch => {
  return dispatch({ type: CHANGE_OUTPUT_TAB, tab });
};
