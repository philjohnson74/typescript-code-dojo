import { encrypt } from './main';

test('should return encrypted string', () => {
  //  Arrange
  const expectedResult = 'BMODZBXDNABEKUDMUIXMMOUVIF';

  //  Act
  const encryptedResult = encrypt('playfair example', 'Hide the gold in the tree stump');

  //  Assert
  expect(encryptedResult).toBe(expectedResult);
});
