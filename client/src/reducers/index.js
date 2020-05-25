import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    stream: streamReducer
});