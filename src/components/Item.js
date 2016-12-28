import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class Item extends Component {
  onItemPress() {
    const { item } = this.props;
    
    Actions.itemView({ item });
  }

  render() {
    const { item } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.onItemPress()}>
        <View>
          <CardSection>
            <Text>{item.itemType}</Text>
            <Text style={{ height: 20 }}>{item.itemDetails}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Item;
