import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged, passwordChanged, loginUserAttempt
} from '../actions';
import { Button, Input, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUserAttempt(email, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
        <Button onPress={() => this.onButtonPress()}>
          Log In
        </Button>
    );
  }

  render() {
    return (
      <View style={styles.containerStyles}>

        <View style={styles.sectionContainerStyles}>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={text => this.onEmailChange(text)}
          />
        </View>

        <View style={styles.sectionContainerStyles}>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={text => this.onPasswordChange(text)}
          />
        </View>

        <Text style={styles.errorTextStyles}>
          {this.props.error}
        </Text>

        <View style={[styles.sectionContainerStyles, styles.loginButtonStyles]}>
          {this.renderButton()}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgba(0, 50, 255, .3)',
    paddingTop: 10,
    marginTop: -11
  },
  errorTextStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  sectionContainerStyles: {
    height: 50,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'rgba(0, 0, 0, .5)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(190, 200, 190)',
    justifyContent: 'center'
  },
  loginButtonStyles: {
    width: 160,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUserAttempt
})(LoginForm);
