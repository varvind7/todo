import { combineReducers } from "redux";
import auth from './auth';
import reducer from './reducer';

export default combineReducers({ 
    addTodo:reducer,
    auth:auth,

});
