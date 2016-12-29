import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection, Button } from './common';
import { saveItem } from '../actions';

class AddItem extends Component {
  state = { color: 'red', label: '' };

  onSave() {
    const { color, label } = this.state;

    this.props.saveItem(color, label);
  }

  render() {
    return (
      <View>

        <Picker
            selectedValue={this.state.color}
            onValueChange={color => this.setState({ color })}
        >
            <Picker.Item label="red" color="red" value="red" />
            <Picker.Item label="orange" color="orange" value="orange" />
            <Picker.Item label="yellow" color="yellow" value="yellow" />
            <Picker.Item label="green" color="green" value="green" />
            <Picker.Item label="blue" color="blue" value="blue" />
            <Picker.Item label="indigo" color="indigo" value="indigo" />
            <Picker.Item label="violet" color="violet" value="violet" />
            <Picker.Item label="black" color="black" value="black" />
            <Picker.Item label="gray" color="gray" value="gray" />
            <Picker.Item label="brown" color="brown" value="brown" />
        </Picker>

        <CardSection>
          <Input
            label="Label"
            placeholder="Ate food, Had Sex, etc."
            value={this.state.label}
            onChangeText={label => this.setState({ label })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onSave()}>
            Save
          </Button>
        </CardSection>

      </View>
    );
  }
}

export default connect(null, { saveItem })(AddItem);
