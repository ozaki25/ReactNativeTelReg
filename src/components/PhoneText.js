import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});

const openTel = phoneNumber => Linking.openURL(`tel:${phoneNumber}`).catch(alert);

const PhoneText = ({ phoneNumber }) => (
  <Text style={styles.text} onPress={() => openTel(phoneNumber)}>
    {phoneNumber}
  </Text>
);

export default PhoneText;
