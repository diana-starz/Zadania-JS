/*
    6. Losuj trzy liczby a, b, c dopoki nie zajdzie warunek a<b<c. Wyznacz srednia arytmetyczna liczb a oraz c
       i sprawdz czy jest 2 razy wieksza od b.
*/

function drawNumber(min,max) {
    return Math.floor(Math.random() * (max-min) +min);
}

const a = drawNumber(1,100);
const b = drawNumber(1,100);
const c = drawNumber(1,100);

console.log(a)
console.log(b)
console.log(c)

function areAscendingSequence(a, b, c) {
    return a < b && b < c;
}



function average(a, c) {
    return (a + c) / 2;
}

function checkNumbers(a, b, c) {
    return average(a, c) > 2 * b;
}



console.log(checkNumbers(a,b,c));
