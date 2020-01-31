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
    // Get the grid co-ordinates for both letters
    // Swap x co-ordintes for each letter
    // find letters for new co-ordinates
    // join string and return
    return pair;
  }
}
