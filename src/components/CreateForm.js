import _ from 'lodash';
import React, { Component } from 'react';
import { Picker, Text, View, TouchableOpacity } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { connect } from 'react-redux';
import { Button, Spinner, Input } from './common';
import { pickerChange, itemDetailsChange, createItemAttempt, addItem } from '../actions';
import styles from '../Styles';

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

          <View style={[styles.sectionContainerStyles, { height: undefined }]}>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ flex: 5 }}>Select Item</Text>
              <TouchableOpacity style={{ flex: 3 }} onPress={() => this.onAddItem()}>
                <Text style={{ fontSize: 20, color: 'green' }}>+ Add Item</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Picker
                  selectedValue={this.props.label}
                  onValueChange={item => this.onItemPickerChange(item)}
              >
                {this.renderPicker()}
              </Picker>
            </View>

        </View>

        <View style={[styles.sectionContainerStyles, { flex: 1, justifyContent: 'flex-start' }]}>

          <View>
            <Text>Enter Details</Text>
          </View>

          <View>
              <AutoGrowingTextInput
                multiline
                style={{ borderColor: 'gray', borderWidth: 1, margin: 10, alignItems: 'stretch' }}
                placeholder={'Enter Details'}
                onChangeText={text => this.onItemDetailsChange(text)}
                value={this.props.details}
                underlineColorAndroid='transparent'
              />
          </View>

        </View>

        <View style={[styles.sectionContainerStyles, styles.loginButtonStyles]}>
          {this.renderButton()}
        </View>

      </View>
    );
  }
}

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
