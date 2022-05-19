/*
    Chcemy wyznaczyc numer wiersza o najwiekszej sredniej arytmetycznej elementow
    oraz ta srednia.
*/

const rowAvg = (numbers) => numbers.reduce((x, y) => x + y) / numbers.length;

const getMaxAvgRow = (rows) => rows.reduce(
    (res, row, idx) => {
        const avg = rowAvg(row);
        console.log(avg)

        if (res.avg === undefined || avg > res.avg) {
            return { idx, avg}
        }
        return res;
    },

    {
        idx: undefined,
        avg: undefined
    });


const main = () => {
    const arr = [
        [2, 1, 5, 6],
        [2, 3, 7, 6],
        [7, 9, 8, 6]
    ];
    console.log(getMaxAvgRow(arr))
}
main();
