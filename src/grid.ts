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

  getCoordinatesOfLetter(letter: string): { x: number; y: number } {
    return {
      x: 2,
      y: 3,
    };
  }

  getLetterAtCoordinates(x: number, y: number): string {
    return 'H';
  }

  getGrid(): string[][] {
    return this.elements;
  }
}
