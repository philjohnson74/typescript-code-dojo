import { PlayfairCipher } from './playfair-cipher';

export function encrypt(passphrase: string, textToEncrypt: string): string {
  const cipher = new PlayfairCipher(passphrase);
  return cipher.encryptString(textToEncrypt);
}

export function decrypt(passphrase: string, textToDecrypt: string): string {
  const cipher = new PlayfairCipher(passphrase);
  return cipher.decryptString(textToDecrypt);
}
