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

const message1 = '詳しくは0120-000-000へお問い合わせください';
const message2 = '詳しくは店頭へ';
const message3 =
  '詳しくは045-000-0000へ、\nもしくは03-0000-0000へ、\nもしくは045-000-0000にお問い合わせください';
const message4 = '詳しくは0120-000-000';

// 0xxx-xxx-xxx or 0xx-xxx-xxxx or 0x-xxxx-xxxx
const reg = /0[0-9]{3}-[0-9]{3}-[0-9]{3}|0[0-9]{2}-[0-9]{3}-[0-9]{4}|0[0-9]{1}-[0-9]{4}-[0-9]{4}/g;

const openTel = phoneNumber => Linking.openURL(`tel:${phoneNumber}`).catch(alert);

const PhoneText = ({ phoneNumber }) => (
  <Text style={{ color: 'blue' }} onPress={() => openTel(phoneNumber)}>
    {phoneNumber}
  </Text>
);

const replacePhoneNumber = message => {
  const phoneNumbers = message.match(reg);
  if (!phoneNumbers) return message;
  return message.split(reg).reduce((result, text, i) => {
    return [...result, text, <PhoneText key={i} phoneNumber={phoneNumbers[i]} />];
  }, []);
};

export default () => (
  <View style={styles.container}>
    <Text>{replacePhoneNumber(message1)}</Text>
    <Text>{replacePhoneNumber(message2)}</Text>
    <Text>{replacePhoneNumber(message3)}</Text>
    <Text>{replacePhoneNumber(message4)}</Text>
  </View>
);
