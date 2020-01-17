import { Grid } from "./grid";

test('set passphrase', () => {
    //arrange
    const grid = new Grid('playfair example');

    let elements: string[][] = new Array();

    elements.push(['P', 'L', 'A', 'Y', 'F']);
    elements.push(['I', 'R', 'E', 'X', 'M']);
    elements.push(['B', 'C', 'D', 'G', 'H']);
    elements.push(['K', 'N', 'O', 'Q', 'S']);
    elements.push(['T', 'U', 'V', 'W', 'Z']);

    //assert
    expect(grid.getGrid()).toStrictEqual(elements);
})