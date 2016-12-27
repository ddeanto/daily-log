import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';

class EntryForm extends Component {
  state = { event: '1', text: '' };

  render() {
    console.log(this.props.user);
    return (
      <View>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.labelStyles}>
            Select Event
          </Text>
          <Picker
              style={styles.pickerStyles}
              selectedValue={this.state.event}
              onValueChange={event => this.setState({ event })}
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
            underlineColorAndroid='transparent'
          />
        </View>

        <CardSection style={{ top: 280 }}>
          <Button onPress={() => console.log('pressed')}>
            Create
          </Button>
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

const mapStateToProps = ({ auth }) => {
  const { user } = auth;

  return { user };
};

export default connect(mapStateToProps, null)(EntryForm);
