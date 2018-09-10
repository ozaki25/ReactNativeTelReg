import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
});

const message1 = '詳しくは0120-000-0000へお問い合わせください';
const message2 = '詳しくは店頭へ';
const message3 = '詳しくは045-000-0000\nもしくは03-0000-0000へお問い合わせください';

// 0xxx-xxx-xxx or 0xx-xxx-xxxx or 0x-xxxx-xxxx
const reg = /0[0-9]{3}-[0-9]{3}-[0-9]{3}|0[0-9]{2}-[0-9]{3}-[0-9]{4}|0[0-9]{1}-[0-9]{4}-[0-9]{4}/;

const openTel = phoneNumber => Linking.openURL(`tel:${phoneNumber}`).catch(alert);

const PhoneText = ({ phoneNumber }) => (
  <Text style={{ color: 'blue' }} onPress={() => openTel(phoneNumber)}>
    {phoneNumber}
  </Text>
);

const replaceTel = message => {
  let str = message;
  let splitMessage = [];
  let r = [];

  while (true) {
    const result = str.match(reg);
    if (!result) break;
    const phoneNumber = result[0];
    splitMessage = str.split(phoneNumber);
    r = [...r, splitMessage[0], <PhoneText phoneNumber={phoneNumber} />];
    str = splitMessage[1];
  }
  return r.length ? [...r, splitMessage[1]] : message;
};

export default () => (
  <View style={styles.container}>
    <Text>{replaceTel(message1)}</Text>
    <Text>{replaceTel(message2)}</Text>
    <Text>{replaceTel(message3)}</Text>
  </View>
);
