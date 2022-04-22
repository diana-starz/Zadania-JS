/*
    6. Losuj trzy liczby a, b, c dopoki nie zajdzie warunek a<b<c. Wyznacz srednia arytmetyczna liczb a oraz c
       i sprawdz czy jest 2 razy wieksza od b.
*/

function drawIntNumber(min,max) {
    return Math.floor(Math.random() * (max-min) +min);
}

const drawThreeNumbersWithCondition= (min, max) => {
    if (min > max) {
        throw new Error('Draw range is not correct');
    }
    let a, b, c;
    do {
        a = drawIntNumber(min, max);
        b = drawIntNumber(min, max);
        c = drawIntNumber(min, max);
    } while (a>=b || b>=c);
    return {a,b,c};
}


const {a,b,c} = drawThreeNumbersWithCondition(1,100)

console.log(a);
console.log(b);
console.log(c);


function average(a, c) {
    return (a + c) / 2;
}


function checkNumbers(a, b, c) {
    return average(a, c) > 2 * b;
}

console.log(average(a,c))
console.log(checkNumbers(a,b,c));


