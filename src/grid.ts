export class Grid {
    private elements: string[][] = [];

    constructor(private passphrase: string) {
        // const uniqueLetters = passphrase.split('').map((x, index, array) => array.indexOf(x) === index);

        this.elements = [['A', 'B', 'C'], ['D', 'E', 'F']];
    }

    getCoordinatesOfLetter(letter: string) {
        return {
            x: 2,
            y: 3
        };
    }

    getLetterAtCoordinates(x: number, y: number) {
        return 'H';
    }
}