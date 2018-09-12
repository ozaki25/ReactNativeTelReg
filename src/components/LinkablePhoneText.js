import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import PhoneText from './PhoneText';

// 0xxx-xxx-xxx or 0xx-xxx-xxxx or 0x-xxxx-xxxx
const reg = /0[0-9]{3}-[0-9]{3}-[0-9]{3}|0[0-9]{2}-[0-9]{3}-[0-9]{4}|0[0-9]{1}-[0-9]{4}-[0-9]{4}/g;

// ex. message = 'お問い合わせは03-0000-0000もしくは0120-000-000へお願いします'
const replacePhoneNumber = message => {
  // ex. phoneNumbers = [03-0000-0000, 0120-000-000]
  const phoneNumbers = message.match(reg);
  if (!phoneNumbers) return message;

  // ex. message.split(reg) = ['お問い合わせは', 'もしくは', 'へお願いします']
  return message.split(reg).reduce((result, text, i) => {
    // ex. ループ一周目 result = [], text = 'お問い合わせは', i = 0
    // ex. ループ二周目 result = ['お問い合わせは', <PhoneTtext phoneNumber="03-0000-0000" />], text = 'もしくは', i = 1
    // ex. ループ三周目 result = ['お問い合わせは', <PhoneTtext phoneNumber="03-0000-0000" />, 'もしくは', <PhoneTtext phoneNumber="0120-000-000" />], text = 'へお願いします', i = 2
    return [...result, text, phoneNumbers[i] && <PhoneText key={i} phoneNumber={phoneNumbers[i]} />];
  }, []);
};

/*
コメントない方が見やすいかも
const replacePhoneNumber = message => {
  const phoneNumbers = message.match(reg);
  if (!phoneNumbers) return message;

  return message.split(reg).reduce((result, text, i) => {
    return [...result, text, phoneNumbers[i] && <PhoneText key={i} phoneNumber={phoneNumbers[i]} />];
  }, []);
};
*/

const styles = StyleSheet.create({
  text: {
    color: '#bbb',
    fontSize: 16,
  },
});

const LinkablePhoneText = ({ children }) => (
  <Text style={styles.text}>{replacePhoneNumber(children)}</Text>
);

LinkablePhoneText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LinkablePhoneText;
