import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'password_changed',
    payload: text
  };
};

export const loginUserAttempt = (email, password) => {
  return (dispatch) => {
      dispatch({ type: 'login_user_attempt' });

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        });
  };
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'login_user_success',
    payload: user
   });
  Actions.main();
};

export const loginUserFail = (dispatch) => {
  dispatch({ type: 'login_user_fail' });
};
