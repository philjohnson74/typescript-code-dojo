import { PlayfairCipher } from './playfair-cipher';

test('set passphrase', () => {
  const cipher = new PlayfairCipher('passphrase');

  expect(cipher.getPassphrase()).toBe('passphrase');
});

test('encrypt pair', () => {
  const cipher = new PlayfairCipher('playfair example');

  expect(cipher.encryptPair('HI')).toBe('BM');
});
