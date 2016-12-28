import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import itemConfig from '../ItemConfig';

class Item extends Component {
  onItemPress() {
    const { item } = this.props;

    Actions.itemView({ item });
  }

  color() {
    const { item } = this.props;

    return itemConfig(item.itemType);
  }

  renderDate() {
    const { date } = this.props.item;

    return date.substring(0, 15);
  }

  renderTextDetails() {
    const { itemDetails } = this.props.item;

    return itemDetails.substring(0, 30) + '...';
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onItemPress()}>
        <View>
          <CardSection>
            <Text style={{ color: this.color() }}>
              {this.renderDate()}
            </Text>
            <Text
              style={styles.textStyles}
            >
              {this.renderTextDetails()}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyles: {
    paddingLeft: 5,
    height: 20,
    color: 'black'
  }
};

export default Item;
