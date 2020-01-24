export class Grid {
    private elements: string[][] = new Array();

    constructor(private passphrase: string) {
        let uniqueLetters = this.getUniqueCharacterList(passphrase)

        for (let row = 0; row < 5; row++) {
            let tempArray: string[] = new Array()
            let headStart = row * 5

            for (let column = 0; column < 5; column++) {
                tempArray.push(uniqueLetters[headStart + column])
            }

            this.elements.push(tempArray)
        }
    }

    getUniqueCharacterList(passphrase: string): string {
        let alphabet: "ABCDEFGHIKLMNOPQRSTUVWXYZ" = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        let allLetters: string = `${passphrase.toUpperCase()}${alphabet}`.replace(/J/g, 'I')
        const uniqueLetters = allLetters
            .split('')
            .filter((x, index, array) => array.indexOf(x) === index)
            .join('')
            .replace(' ', '')
 
        return uniqueLetters
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

    getGrid() {
        return this.elements;
    }
}