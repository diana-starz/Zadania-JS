/*
    4. Losuj trzy liczby do zmiennych a, b, c dopoki ich iloczyn nie bedzie wartoscia parzysta. Sprawdz czy kazda
       z wylosowanych liczb jest podzielna przez 5 i jezeli tak wypisz komunikat TAK. W przeciwnym razie wypisz
       komunikat NIE.
*/

function drawNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawThreeNumbersWithCondition(min, max) {
    if (min > max) {
        throw new Error('Draw range is not correct');
    }

    let n1, n2, n3;
    do {
        n1 = drawNumber(min, max);
        n2 = drawNumber(min, max);
        n3 = drawNumber(min, max);
    } while (n1 * n2 * n3 % 2 === 1);
    return {n1, n2, n3};
}

function isDividedBy(divisor, number) {
    if (divisor === 0) {
        throw new Error('Cannot divide by zero !');
    }
    return number % divisor === 0;
}

function areDividedBy(divisor, n1, n2, n3) {
    return isDividedBy(divisor, n1) && isDividedBy(divisor, n2) && isDividedBy(divisor, n3)
}

function main() {
    const MIN_RANGE = 10;
    const MAX_RANGE = 100;

    const {n1, n2, n3} = drawThreeNumbersWithCondition(MIN_RANGE, MAX_RANGE);
    console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`)

    const DIVISOR = 5;
    console.log(areDividedBy(DIVISOR, n1, n2, n3)?`TAK`:`NIE`)
}
main()
