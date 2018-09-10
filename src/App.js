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
  item: {
    marginBottom: 10,
  },
});

const message1 = '0120-123-123';
const message2 = '045-123-1234';
const message3 = '03-1234-1234';
const message4 = '0120-123-123045-123-123403-1234-1234';
const message5 = '03-1234-1234にご連絡ください';
const message6 = '次の番号にご連絡ください03-1234-1234';
const message7 = 'お問い合わせは03-1234-1234へお願いします';
const message8 = 'お問い合わせは0120-123-123または045-123-1234\n03-1234-1234へお願いします';
const message9 = '窓口までお越し下さい';
const message10 = '恐れ入りますが、\n窓口までお越し下さい';

export default () => (
  <View style={styles.container}>
    <View style={styles.item}>
      <LinkablePhoneText>{message1}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message2}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message3}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message4}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message5}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message6}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message7}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message8}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message9}</LinkablePhoneText>
    </View>
    <View style={styles.item}>
      <LinkablePhoneText>{message10}</LinkablePhoneText>
    </View>
  </View>
);
