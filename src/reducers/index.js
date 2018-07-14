import { combineReducers } from 'redux';
import app from './app';
import editor from './editor';

export default combineReducers({ app, editor });
