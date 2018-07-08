import { combineReducers } from 'redux';
import app from './app';
import editor from './editor';
import output from './output';

const reducer = combineReducers({ app, editor, output });
export default reducer;
