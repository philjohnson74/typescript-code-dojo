export class PlayfairCipher {
  constructor(private passphrase: string) {}

  getPassphrase(): string {
    return this.passphrase;
  }
}
