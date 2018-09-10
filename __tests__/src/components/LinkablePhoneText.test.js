import 'react-native';
import React from 'react';
import LinkablePhoneText from '../../../src/components/LinkablePhoneText';
import renderer from 'react-test-renderer';

describe('#LinkablePhoneText', () => {
  describe('電話番号だけの場合', () => {
    describe('電話番号が一つの場合', () => {
      it('0xxx-xxx-xxx形式の文字列がリンク化されること', () => {
        const children = '0120-123-123';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('0xx-xxx-xxxx形式の文字列がリンク化されること', () => {
        const children = '045-123-1234';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('0x-xxxx-xxxx形式の文字列がリンク化されること', () => {
        const children = '03-1234-1234';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('電話番号が複数の場合', () => {
      it('それぞれの電話番号がリンク化されること', () => {
        const children = '0120-123-123045-123-123403-1234-1234';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('電話番号と文字列を含む場合', () => {
    describe('電話番号が一つの場合', () => {
      it('電話番号から始まる場合、電話番号の文字列がリンク化されること', () => {
        const children = '03-1234-1234にご連絡ください';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('電話番号で終わる場合、電話番号の文字列がリンク化されること', () => {
        const children = '次の番号にご連絡ください03-1234-1234';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it('文の途中に電話番号がある場合、電話番号の文字列がリンク化されること', () => {
        const children = 'お問い合わせは03-1234-1234へお願いします';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('電話番号が複数の場合', () => {
      it('それぞれの電話番号がリンク化されること', () => {
        const children = 'お問い合わせは0120-123-123または045-123-1234\n03-1234-1234へお願いします';
        const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('文字列だけの場合', () => {
    it('改行なしの場合、そのままの文字列が表示されること', () => {
      const children = '窓口までお越し下さい';
      const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('改行ありの場合、そのままの文字列が表示されること', () => {
      const children = '恐れ入りますが、\n窓口までお越し下さい';
      const tree = renderer.create(<LinkablePhoneText>{children}</LinkablePhoneText>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
