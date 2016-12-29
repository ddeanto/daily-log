import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class Item extends Component {
  onItemPress() {
    const { item } = this.props;

    Actions.itemView({ item });
  }

  color() {
    const { item, itemsConfigged } = this.props;

    for (let i = 0; i < itemsConfigged.length; i++) {
      if (itemsConfigged[i].label === item.label) {
        return itemsConfigged[i].color;
      }
    }

    return 'green';
  }

  renderDate() {
    const { date } = this.props.item;

    return date.substring(4, 21);
  }

  renderTextDetails() {
    const { itemDetails } = this.props.item;

    return itemDetails.substring(0, 20) + '...';
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onItemPress()}>
        <View style={styles.containerStyles}>
          <CardSection>
            <Text>
              {this.renderDate()}
            </Text>
            <Text style={{ color: this.color(), paddingLeft: 10 }}>
              {this.props.item.label}
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
    height: 20
  },
  containerStyles: {
    paddingTop: 5,
    paddingBottom: 5
  }
};

const mapStateToProps = ({ itemsConfig }) => {
  const itemsConfigged = _.map(itemsConfig, (val, uid) => {
    return { ...val, uid };
  });

  return { itemsConfigged };
};

export default connect(mapStateToProps)(Item);
