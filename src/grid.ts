export class Grid {
  private elements: string[][] = [];

  constructor(private passphrase: string) {
    const uniqueLetters = this.getUniqueCharacterList(passphrase);

    for (let row = 0; row < 5; row++) {
      const tempArray: string[] = [];
      const headStart = row * 5;

      for (let column = 0; column < 5; column++) {
        tempArray.push(uniqueLetters[headStart + column]);
      }

      this.elements.push(tempArray);
    }
  }

  getUniqueCharacterList(passphrase: string): string {
    const alphabet: 'ABCDEFGHIKLMNOPQRSTUVWXYZ' = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    const allLetters: string = `${passphrase.toUpperCase()}${alphabet}`.replace(/J/g, 'I');
    const uniqueLetters = allLetters
      .split('')
      .filter((x, index, array) => array.indexOf(x) === index)
      .join('')
      .replace(' ', '');

    return uniqueLetters;
  }

  getCoordinatesOfLetter(letter: string): { row: number; column: number } {
    for (let row = 0; row < 5; row++) {
      for (let column = 0; column < 5; column++) {
        if (this.elements[row][column] == letter) {
          return {
            row,
            column
          };
        }
      }
    }

    return {
      row: 0,
      column: 0
    };
  }

  getLetterAtCoordinates(row: number, column: number): string {
    return this.elements[row][column];
  }

  getGrid(): string[][] {
    return this.elements;
  }
}
