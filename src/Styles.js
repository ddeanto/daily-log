import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .15)',
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
    backgroundColor: 'rgba(0, 0, 0, .2)',
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

export default styles;
