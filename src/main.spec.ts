import { encrypt } from './main';

test('should return encrypted string', () => {
  expect(encrypt('playfair example', 'Hide the gold in the tree stump')).toBe('BM OD ZB XD NA BE KU DM UI XM MO UV IF');
});
