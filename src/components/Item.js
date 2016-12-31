import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
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
    return itemDetails;
    // return itemDetails.substring(0, 340) + '...';
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onItemPress()}>
        <View style={styles.sectionContainerStyles}>

          <View style={styles.metaDataStyles}>
            <Text style={{ fontWeight: '500', color: this.color() }}>
              {this.props.item.label}
            </Text>

            <Text style={{ fontWeight: '500', color: 'rgb(80, 80, 80)' }}>
              {this.renderDate()}
            </Text>
          </View>

          <View style={styles.textContainerStyles}>
            <Text style={styles.textStyles}>
              {this.renderTextDetails()}
            </Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainerStyles: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'rgba(0, 0, 0, .5)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(190, 200, 190)',
    justifyContent: 'center',
  },
  metaDataStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  textContainerStyles: {
    padding: 5
  },
  textStyles: {
    color: 'rgb(60, 60, 60)'
  }
});

const mapStateToProps = ({ itemsConfig }) => {
  const itemsConfigged = _.map(itemsConfig, (val, uid) => {
    return { ...val, uid };
  });

  return { itemsConfigged };
};

export default connect(mapStateToProps)(Item);
