import { myFirebase } from "../../firebase/firebase";
import * as actionTypes from './actionTypes';

const requestLogin = () => {
    return {
      type: actionTypes.LOGIN_REQUEST
    };
  };

  const receiveLogin = user => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      user
    };
  };

  const loginError = () => {
    return {
      type: actionTypes.LOGIN_FAILURE
    };
  };

  const requestLogout = () => {
    return {
      type: actionTypes.LOGOUT_REQUEST
    };
  };
  const receiveLogout = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS
    };
  };
  const logoutError = () => {
    return {
      type: actionTypes.LOGOUT_FAILURE
    };
  };
  const verifyRequest = () => {
    return {
      type: actionTypes.VERIFY_REQUEST
    };
  };
  const verifySuccess = () => {
    return {
      type: actionTypes.VERIFY_SUCCESS
    };
  };

  export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(receiveLogin(user));
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(loginError());
      });
  };

  export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(receiveLogout());
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
      });
  };

  export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(receiveLogin(user));
      }
      dispatch(verifySuccess());
    });
  };

  