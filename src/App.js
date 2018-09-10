import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinkablePhoneText from './components/LinkablePhoneText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
});

const message1 = '詳しくは0120-111-222へお問い合わせください';
const message2 = '詳しくは店頭へ';
const message3 =
  '詳しくは045-123-1234へ、\nもしくは03-1111-2222へ、\nもしくは045-123-1234にお問い合わせください';
const message4 = '詳しくは0120-999-999';

export default () => (
  <View style={styles.container}>
    <LinkablePhoneText>{message1}</LinkablePhoneText>
    <LinkablePhoneText>{message2}</LinkablePhoneText>
    <LinkablePhoneText>{message3}</LinkablePhoneText>
    <LinkablePhoneText>{message4}</LinkablePhoneText>
  </View>
);
