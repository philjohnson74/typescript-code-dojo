import { PlayfairCipher } from './playfair-cipher';

test('set passphrase', () => {
  const cipher = new PlayfairCipher('passphrase');

  expect(cipher.getPassphrase()).toBe('passphrase');
});
