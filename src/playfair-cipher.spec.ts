import { PlayfairCipher } from './playfair-cipher';

test('set passphrase', () => {
  const cipher = new PlayfairCipher('passphrase');

  expect(cipher.getPassphrase()).toBe('passphrase');
});

test.each([
  ['HI', 'BM'],
  ['DE', 'OD'],
  ['TH', 'ZB'],
  ['EG', 'XD'],
  ['OL', 'NA'],
  ['DI', 'BE'],
  ['NT', 'KU'],
  ['HE', 'DM'],
  ['TR', 'UI'],
  ['EX', 'XM'],
  ['ES', 'MO'],
  ['TU', 'UV'],
  ['MP', 'IF'],
  ['YF', 'FP']
])('encrypt pair', (given, expected) => {
  const cipher = new PlayfairCipher('playfair example');

  expect(cipher.encryptPair(given)).toBe(expected);
});
