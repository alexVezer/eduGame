import {combineReducers } from 'redux';
import userReducer from './userReducer';
import wordReducer from './wordReducer';

export default combineReducers({
  word: wordReducer,
  user: userReducer 
});