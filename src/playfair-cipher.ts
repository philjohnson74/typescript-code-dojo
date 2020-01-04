export class PlayfairCipher {
    constructor(private passphrase: string) {}

    getPassphrase() {
        return this.passphrase;
    }
}