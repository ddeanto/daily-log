import React, { Component } from 'react';
import { Picker, View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, CardSection, Button } from './common';
import { saveItem } from '../actions';
import styles from '../Styles';

class AddItem extends Component {
  state = { color: 'red', label: '' };

  onSave() {
    const { color, label } = this.state;

    this.props.saveItem(color, label);
  }

  render() {
    return (
      <View style={styles.containerStyles}>

        <View style={styles.sectionContainerStyles}>
          <Input
            label="Label"
            placeholder="Ate food, Had Sex, etc."
            value={this.state.label}
            onChangeText={label => this.setState({ label })}
          />
        </View>

        <View style={[styles.sectionContainerStyles, { height: undefined }]}>

          <View>
            <Text>Color</Text>
          </View>

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
          </View>

        </View>

        <View style={[styles.sectionContainerStyles, styles.loginButtonStyles]}>
          <Button onPress={() => this.onSave()}>
            Save
          </Button>
        </View>

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   containerStyles: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 50, 255, .3)',
//     paddingTop: 10,
//     marginTop: -11
//   },
//   sectionContainerStyles: {
//     margin: 5,
//     marginLeft: 10,
//     marginRight: 10,
//     borderColor: 'rgba(0, 0, 0, .5)',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: 'rgb(190, 200, 190)',
//     justifyContent: 'center'
//   },
//   loginButtonStyles: {
//     width: 160,
//     height: 40,
//     marginTop: 10,
//     borderRadius: 10,
//     alignSelf: 'center'
//   }
// });

export default connect(null, { saveItem })(AddItem);

// <View style={styles.sectionContainerStyles}>
//
//   <View>
//     <Text>Color</Text>
//   </View>
//
//   <View>
//     <Picker
//         selectedValue={this.state.color}
//         onValueChange={color => this.setState({ color })}
//     >
//         <Picker.Item label="red" color="red" value="red" />
//         <Picker.Item label="orange" color="orange" value="orange" />
//         <Picker.Item label="yellow" color="yellow" value="yellow" />
//         <Picker.Item label="green" color="green" value="green" />
//         <Picker.Item label="blue" color="blue" value="blue" />
//         <Picker.Item label="indigo" color="indigo" value="indigo" />
//         <Picker.Item label="violet" color="violet" value="violet" />
//         <Picker.Item label="black" color="black" value="black" />
//         <Picker.Item label="gray" color="gray" value="gray" />
//         <Picker.Item label="brown" color="brown" value="brown" />
//     </Picker>
// </View>
//
// </View>

      // <CardSection>
      //   <Button onPress={() => this.onSave()}>
      //     Save
      //   </Button>
      // </CardSection>
