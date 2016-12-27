import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';

const Hello = () => <Text>Hello</Text>;


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene key="hello" component={Hello} title="Please suck peepee" />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
