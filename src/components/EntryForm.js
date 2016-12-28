import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { connect } from 'react-redux';
import { CardSection, Button, Spinner } from './common';
import { pickerChange, itemDetailsChange, createItemAttempt } from '../actions';

class EntryForm extends Component {
  onItemPickerChange(item) {
    this.props.pickerChange(item);
  }

  onItemDetailsChange(text) {
    this.props.itemDetailsChange(text);
  }

  renderButton() {
    if (!this.props.loading) {
      const { itemType, itemDetails } = this.props;

      return (
        <Button
          onPress={() => this.props.createItemAttempt(itemType, itemDetails)}
        >
          Create
        </Button>
      );
    }

    return <Spinner size='large' />;
  }

  render() {
    return (
      <View>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.labelStyles}>
            Select Item
          </Text>
          <Picker
              style={styles.pickerStyles}
              selectedValue={this.props.itemType}
              onValueChange={item => this.onItemPickerChange(item)}
          >
              <Picker.Item label="didn't eat" color="red" value="1" />
              <Picker.Item label="didn't sleep" color="blue" value="2" />
              <Picker.Item label="ate on time" color="green" value="3" />
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
            value={this.props.itemDetails}
            underlineColorAndroid='transparent'
          />
        </View>

        <CardSection style={{ top: 280 }}>
          {this.renderButton()}
        </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerStyles: {
    width: 180,
    left: 10
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
  }
};

const mapStateToProps = ({ create }) => {
  const { itemType, itemDetails, loading } = create;

  return { itemType, itemDetails, loading };
};

export default connect(mapStateToProps, {
  pickerChange, itemDetailsChange, createItemAttempt
})(EntryForm);
