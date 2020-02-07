import { Grid } from './grid';

export class PlayfairCipher {
  private grid: Grid;
  constructor(private passphrase: string) {
    this.grid = new Grid(passphrase);
  }

  getPassphrase(): string {
    return this.passphrase;
  }

  encryptPair(pair: string): string {
    const stringOne = pair[0];
    const stringTwo = pair[1];
    let newStringOneCoords = { row: 0, column: 0 };
    let newStringTwoCoords = { row: 0, column: 0 };

    // Get the grid co-ordinates for both letters
    const stringOneCoord = this.grid.getCoordinatesOfLetter(stringOne);
    const stringTwoCoord = this.grid.getCoordinatesOfLetter(stringTwo);

    // Swap row co-ordintes for each letter
    if (stringOneCoord.column == stringTwoCoord.column) {
      // Pair of letters in the same column
      newStringOneCoords = {
        row: (stringOneCoord.row + 1) % 5,
        column: stringOneCoord.column
      };

      newStringTwoCoords = {
        row: (stringTwoCoord.row + 1) % 5,
        column: stringTwoCoord.column
      };
    } else if (stringOneCoord.row == stringTwoCoord.row) {
      // Pair of letters in the same row
      newStringOneCoords = {
        row: stringOneCoord.row,
        column: (stringOneCoord.column + 1) % 5
      };

      newStringTwoCoords = {
        row: stringTwoCoord.row,
        column: (stringTwoCoord.column + 1) % 5
      };
    } else {
      // Pair of letters make a rectangle
      newStringOneCoords = {
        row: stringOneCoord.row,
        column: stringTwoCoord.column
      };

      newStringTwoCoords = {
        row: stringTwoCoord.row,
        column: stringOneCoord.column
      };
    }

    // find letters for new co-ordinates
    const newStringOne = this.grid.getLetterAtCoordinates(newStringOneCoords.row, newStringOneCoords.column);
    const newStringTwo = this.grid.getLetterAtCoordinates(newStringTwoCoords.row, newStringTwoCoords.column);

    // join string and return
    return newStringOne + newStringTwo;
  }
}
