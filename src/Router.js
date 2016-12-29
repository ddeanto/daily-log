import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateForm from './components/CreateForm';
import ItemList from './components/ItemList';
import ItemView from './components/ItemView';
import AddItem from './components/AddItem';

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
        <Scene key="itemView" component={ItemView} title="Item" />
        <Scene key="entryForm" component={CreateForm} title="Add Entry" />
        <Scene key="addItem" component={AddItem} title="Add Item" />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
// onRight={() => Actions.employeeCreate()}
// rightTitle="Add"
