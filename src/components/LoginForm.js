import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged, passwordChanged, loginUserAttempt
} from '../actions';
import { CardSection, Button, Input, Spinner } from './common';

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
      <View>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={text => this.onEmailChange(text)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={text => this.onPasswordChange(text)}
          />
        </CardSection>

        <Text style={styles.errorTextStyles}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </View>
    );
  }
}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUserAttempt
})(LoginForm);
