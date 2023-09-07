function createSymbolArray(size) {
    const symbols = [1, 2, 3, 4, 5, 6, 7, 8];
    let result = createEmptyMatrix(size);
    let id = 0;
    for (let symbol in symbols) {
        let isPassedIn = '';
        while (isPassedIn !== 'inin') {
            const y = Math.floor(Math.random() * size)
            const x = Math.floor(Math.random() * size)
            console.log(result[x][y].id === undefined);
            if (result[x][y].id === undefined) {

                result[x][y].symbol = symbols[symbol];
                result[x][y].id = id;
                id++;
                isPassedIn += 'in';
            }
        }
    }
    return result;

}

function createEmptyMatrix(size) {
    let res = []
    for (let i = 0; i < size; i++) {
        res.push([]);
        for (let a = 0; a < size; a++) {
            res[i].push({});
        }
    }
    return res;
}

console.log(createSymbolArray(4));