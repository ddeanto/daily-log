import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged, passwordChanged, loginUserAttempt
} from '../actions';
import { Button, Input, Spinner } from './common';
import styles from '../Styles';

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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUserAttempt
})(LoginForm);
