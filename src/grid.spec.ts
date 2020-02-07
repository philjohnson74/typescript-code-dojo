import { Grid } from './grid';

test('set passphrase', () => {
  //arrange
  const grid = new Grid('playfair example');

  const elements: string[][] = [];

  elements.push(['P', 'L', 'A', 'Y', 'F']);
  elements.push(['I', 'R', 'E', 'X', 'M']);
  elements.push(['B', 'C', 'D', 'G', 'H']);
  elements.push(['K', 'N', 'O', 'Q', 'S']);
  elements.push(['T', 'U', 'V', 'W', 'Z']);

  //assert
  expect(grid.getGrid()).toStrictEqual(elements);
});

test('getUniqueCharacterList', () => {
  // arrange
  const grid = new Grid('playfair example');
  const expected = 'PLAYFIREXMBCDGHKNOQSTUVWZ';

  // act
  const actual = grid.getUniqueCharacterList('playfair example');

  // assert
  expect(actual).toBe(expected);
});

test('getUniqueCharacterListWithAJ', () => {
  // arrange
  const grid = new Grid('jumanji');
  const expected = 'IUMANBCDEFGHKLOPQRSTVWXYZ';

  // act
  const actual = grid.getUniqueCharacterList('jumanji');

  // assert
  expect(actual).toBe(expected);
});

test('getCoordinatesForLetterReturnsCoordinates', () => {
  const grid = new Grid('playfair example');
  const letter = 'S';
  const expected = {
    row: 3,
    column: 4
  };

  expect(grid.getCoordinatesOfLetter(letter)).toEqual(expected);
});

test('getLetterAtGivenCoordinates', () => {
  const grid = new Grid('playfair example');
  const expected = 'S';

  expect(grid.getLetterAtCoordinates(3, 4)).toEqual(expected);
});
