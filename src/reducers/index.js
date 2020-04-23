import {combineReducers } from 'redux';
import userReducer from './userReducer';
import wordReducer from './wordReducer';
import authReducer from './authReducer';
import childReducer from './childReducer';

export default combineReducers({
  auth: authReducer,
  child: childReducer,
  word: wordReducer,
  user: userReducer 
});