import _ from 'lodash';
import React, { Component } from 'react';
import { Picker, Text, View, TouchableOpacity } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { connect } from 'react-redux';
import { CardSection, Button, Spinner } from './common';
import { pickerChange, itemDetailsChange, createItemAttempt, addItem } from '../actions';

class EntryForm extends Component {
  onItemPickerChange(item) {
    this.props.pickerChange(item);
  }

  onItemDetailsChange(text) {
    this.props.itemDetailsChange(text);
  }

  onAddItem() {
    this.props.addItem();
  }

  renderPicker() {
    const { itemsConfigged } = this.props;

    return (
      itemsConfigged.map(thing => {
        return (
          <Picker.Item
            key={thing.label}
            label={thing.label}
            color={thing.color}
            value={thing.label}
          />
        );
      }
    ));
  }


  renderButton() {
    if (!this.props.loading) {
      const { label, details } = this.props;

      return (
        <Button
          onPress={() => this.props.createItemAttempt(label, details)}
        >
          Create
        </Button>
      );
    }

    return <Spinner size='large' />;
  }

  render() {
    return (
      <View style={styles.containerStyles}>

        <CardSection style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.labelStyles}>Select Item</Text>
            <TouchableOpacity style={{ left: 39 }} onPress={() => this.onAddItem()}>
              <Text style={{ fontSize: 30, color: 'green' }}>+</Text>
            </TouchableOpacity>
          </View>

          <Picker
              style={styles.pickerStyles}
              selectedValue={this.props.label}
              onValueChange={item => this.onItemPickerChange(item)}
          >
            {this.renderPicker()}
          </Picker>
        </CardSection>

        <View style={{ flexDirection: 'column', padding: 5 }}>
          <Text style={styles.labelStyles}>
            Enter Details
          </Text>
          <AutoGrowingTextInput
            style={styles.inputStyles}
            placeholder={'Enter Details'}
            onChangeText={text => this.onItemDetailsChange(text)}
            value={this.props.details}
            underlineColorAndroid='transparent'
          />
        </View>

        <CardSection style={styles.buttonContainerStyles}>
          {this.renderButton()}
        </CardSection>

      </View>
    );
  }
}

const styles = {
  containerStyles: {
    position: 'absolute',
    top: 65,
    bottom: 0,
    left: 0,
    right: 0
  },
  pickerStyles: {
    left: 10,
    width: 150
  },
  inputStyles: {
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10
  },
  labelStyles: {
    paddingLeft: 10,
    fontSize: 18
  },
  buttonContainerStyles: {
    position: 'absolute',
    bottom: 10
  }
};

const mapStateToProps = ({ create, itemsConfig }) => {
  const { label, details, loading } = create;
  const itemsConfigged = _.map(itemsConfig, (val, uid) => {
    return { ...val, uid };
  });

  return { label, details, loading, itemsConfigged };
};

export default connect(mapStateToProps, {
  pickerChange, itemDetailsChange, createItemAttempt, addItem
})(EntryForm);
