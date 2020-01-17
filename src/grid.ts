export class Grid {
    private elements: string[][] = new Array();

    constructor(private passphrase: string) {
        // const uniqueLetters = passphrase.split('').map((x, index, array) => array.indexOf(x) === index);
        for(let letter = 0; letter<26; letter++){

        }

        this.elements.push(['A', 'B', 'C', 'D', 'E']);
        this.elements.push(['F', 'G', 'H', 'I', 'K']);
        this.elements.push(['L', 'M', 'N', 'O', 'P']);
        this.elements.push(['Q', 'R', 'S', 'T', 'U']);
        this.elements.push(['V', 'W', 'X', 'Y', 'Z']);
    }

    //for next week: Start with Unit Test
    getUniqueCharacterList(passphrase: string){
        let alphabet: "ABCDEFGHIKLMNOPQRSTUVWXYZ" = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        let allLetters: string = `${ passphrase.toUpperCase() }${ alphabet }`
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