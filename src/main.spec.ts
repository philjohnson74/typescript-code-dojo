import { encrypt } from './main';
import { decrypt } from './main';

test('should return encrypted string', () => {
  //  Arrange
  const expectedResult = 'BMODZBXDNABEKUDMUIXMMOUVIF';

  //  Act
  const encryptedResult = encrypt('playfair example', 'Hide the gold in the tree stump');

  //  Assert
  expect(encryptedResult).toBe(expectedResult);
});

test('should return encrypted string when two instances of reccuring letter', () => {
  //  Arrange
  const expectedResult = 'UIXMXMXMFELAXM';

  //  Act
  const encryptedResult = encrypt('playfair example', 'tree example');

  //  Assert
  expect(encryptedResult).toBe(expectedResult);
});

test('should return decrypted string', () => {
  //  Arrange
  const expectedResult = 'HidethegoldinthetreXestump'.toUpperCase();

  //  Act
  const decryptedResult = decrypt('playfair example', 'BMODZBXDNABEKUDMUIXMMOUVIF');

  //  Assert
  expect(decryptedResult).toBe(expectedResult);
});
