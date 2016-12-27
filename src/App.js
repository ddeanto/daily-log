import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBUDUxsvPb2rRrLn97HnjcX1o8A1t8WtbI',
      authDomain: 'daily-log-aa393.firebaseapp.com',
      databaseURL: 'https://daily-log-aa393.firebaseio.com',
      storageBucket: 'daily-log-aa393.appspot.com',
      messagingSenderId: '1044212839123'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
