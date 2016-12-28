import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EntryForm from './components/EntryForm';
import ItemList from './components/ItemList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          key="itemList"
          component={ItemList}
          title="Items"
          onRight={() => Actions.entryForm()}
          rightTitle="Add"
          initial
        />
        <Scene key="entryForm" component={EntryForm} title="Add Entry" />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
// onRight={() => Actions.employeeCreate()}
// rightTitle="Add"
