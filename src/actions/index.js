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

// -----------------------------------------------------------------------------

export const pickerChange = (itemValue) => {
  return {
    type: 'picker_change',
    payload: itemValue
  };
};

export const itemDetailsChange = (text) => {
  return {
    type: 'item_details_change',
    payload: text
  };
};

export const createItemAttempt = (itemType, itemDetails) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: 'create_item_attempt' });

    firebase.database().ref(`/users/${currentUser.uid}/items`)
      .push({ itemType, itemDetails, date: new Date().toString() })
      .then(() => {
        dispatch({ type: 'create_item_success' });
        Actions.itemList();
      });
  };
};

// -----------------------------------------------------------------------------

export const itemsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/items`)
      .on('value', snapshot => {
        dispatch({ type: 'items_fetch_success', payload: snapshot.val() });
      });
  };
};
