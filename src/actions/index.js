import { Actions } from 'react-native-router-flux';

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
      dispatch({
        type: 'login_user_attempt',
        payload: { email, password }
      });

      if (email === 'jizz' && password === 'wizard') {
        setTimeout(() => loginUserSuccess(dispatch), 2 * 1000);
      } else {
        setTimeout(() => loginUserFail(dispatch), 2 * 1000);
      }
  };
};

export const loginUserSuccess = (dispatch) => {
  dispatch({ type: 'login_user_success' });
  Actions.main();
};

export const loginUserFail = (dispatch) => {
  dispatch({ type: 'login_user_fail' });
};
