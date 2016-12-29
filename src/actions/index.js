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

export const pickerChange = (label) => {
  return {
    type: 'picker_change',
    payload: label
  };
};

export const itemDetailsChange = (text) => {
  return {
    type: 'item_details_change',
    payload: text
  };
};

export const createItemAttempt = (label, itemDetails) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: 'create_item_attempt' });

    firebase.database().ref(`/users/${currentUser.uid}/items`)
      .push({ label, itemDetails, date: new Date().toString() })
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

// -----------------------------------------------------------------------------

export const addItem = () => {
  return () => {
    Actions.addItem();
  };
};

export const saveItem = (color, label) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/itemConfig`)
      .push({ color, label })
      .then(() => {
        Actions.itemList();
      })
      .catch((error) => console.log(error));
  };
};

export const itemsConfigFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/itemConfig`)
      .on('value', snapshot => {
        dispatch({ type: 'items_config_fetch_success', payload: snapshot.val() });
      });
  };
};
