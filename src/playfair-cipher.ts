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

  encryptString(stringToEncrypt: string): string {
    let retVal = '';

    stringToEncrypt = stringToEncrypt
      .toUpperCase()
      .replace(/J/g, 'I')
      .replace(/ /g, '');

    stringToEncrypt = this.splitRecurringCharactersInPairs(stringToEncrypt);

    const pairsToEncrypt: RegExpMatchArray | null = stringToEncrypt.match(/.{1,2}/g);

    if (pairsToEncrypt != null) {
      for (let i = 0; i < pairsToEncrypt.length; i++) {
        const pairToEncrypt = pairsToEncrypt[i];
        const encryptedPair = this.encryptPair(pairToEncrypt);
        retVal = retVal + encryptedPair;
      }
    }

    return retVal;
  }

  splitRecurringCharactersInPairs(stringWithRecurringCharacters: string): string {
    let pairsToDedupe: RegExpMatchArray | null = stringWithRecurringCharacters.match(/.{1,2}/g);
    let pairWithRecurringLetters: string;

    do {
      pairWithRecurringLetters = '';

      if (pairsToDedupe != null) {
        for (let i = 0; i < pairsToDedupe.length; i++) {
          const pairToDedupe = pairsToDedupe[i];

          const firstCharacter = pairToDedupe.charAt(0);
          const secondCharacter = pairToDedupe.charAt(1);

          if (firstCharacter === secondCharacter) {
            pairWithRecurringLetters = pairToDedupe;
            break;
          }
        }
      }

      console.log('pairWithRecurringLetters: ' + pairWithRecurringLetters);

      if (pairWithRecurringLetters.length > 0) {
        const indexOfRecurringLetters = stringWithRecurringCharacters.indexOf(pairWithRecurringLetters);
        console.log('indexOfRecurringLetters: ' + indexOfRecurringLetters);
        const upToAndIncludingFirstCharacter = stringWithRecurringCharacters.substring(0, indexOfRecurringLetters + 1);
        const fromAndIncludingSecondCharacter = stringWithRecurringCharacters.substring(indexOfRecurringLetters + 1);
        stringWithRecurringCharacters = `${upToAndIncludingFirstCharacter}X${fromAndIncludingSecondCharacter}`;
      }

      console.log('stringWithRecurringCharacters: ' + stringWithRecurringCharacters);

      pairsToDedupe = stringWithRecurringCharacters.match(/.{1,2}/g);

      console.log('pairsToDedupe: ' + pairsToDedupe);
    } while (pairWithRecurringLetters != '');

    let retVal = stringWithRecurringCharacters;

    if (retVal.length % 2 > 0) {
      retVal = `${retVal}X`;
    }

    return retVal;
  }

  decryptString(stringToDecrypt: string): string {
    let retVal = '';

    stringToDecrypt = stringToDecrypt.toUpperCase();

    const pairsToDecrypt: RegExpMatchArray | null = stringToDecrypt.match(/.{1,2}/g);

    if (pairsToDecrypt != null) {
      for (let i = 0; i < pairsToDecrypt.length; i++) {
        const pairToDecrypt = pairsToDecrypt[i];
        const decryptedPair = this.decryptPair(pairToDecrypt);
        retVal = retVal + decryptedPair;
      }
    }

    return retVal;
  }

  decryptPair(pair: string): string {
    const stringOne = pair[0];
    const stringTwo = pair[1];
    let newStringOneCoords = { row: 0, column: 0 };
    let newStringTwoCoords = { row: 0, column: 0 };

    // Get the grid co-ordinates for both letters
    const stringOneCoord = this.grid.getCoordinatesOfLetter(stringOne);
    const stringTwoCoord = this.grid.getCoordinatesOfLetter(stringTwo);

    if (stringOneCoord.column == stringTwoCoord.column) {
      // Pair of letters in the same column
      newStringOneCoords = {
        row: (stringOneCoord.row + 4) % 5,
        column: stringOneCoord.column
      };

      newStringTwoCoords = {
        row: (stringTwoCoord.row + 4) % 5,
        column: stringTwoCoord.column
      };
    } else if (stringOneCoord.row == stringTwoCoord.row) {
      // Pair of letters in the same row
      newStringOneCoords = {
        row: stringOneCoord.row,
        column: (stringOneCoord.column + 4) % 5
      };

      newStringTwoCoords = {
        row: stringTwoCoord.row,
        column: (stringTwoCoord.column + 4) % 5
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
