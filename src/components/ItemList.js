import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { itemsFetch } from '../actions';
import { CardSection } from './common';
// import ListItem from './ListItem';

class ItemList extends Component {
  state = { itemz: [1] }

  colors = {
    '1': 'red',
    '2': 'green',
    '3': 'blue'
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/items`)
      .on('value', snapshot => {
        const a = snapshot.val();
        const b = _.map(a, (x, y) => x);
        // console.log( _.map(snapshot.val(), (x, y) => { ...x, y }) );
        this.setState({ itemz: b });
      });
  }

  renderRow(item) {
    // console.log(item);
    return (
      <CardSection>
        <Text>{item.itemType}</Text>
        <Text style={{ height: 20 }}>  {item.itemDetails}</Text>
      </CardSection>
    );
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.state.itemz);

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default connect(null, { itemsFetch })(ItemList);
