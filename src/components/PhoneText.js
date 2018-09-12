import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

const openTel = phoneNumber => Linking.openURL(`tel:${phoneNumber}`).catch(alert);

const PhoneText = ({ phoneNumber }) => (
  <Text style={styles.text} onPress={() => openTel(phoneNumber)}>
    {phoneNumber}
  </Text>
);

PhoneText.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default PhoneText;
