const sub = function (n1, n2) { return n1 - n2; }
console.log(sub(10,40))

const add = (x,y) => {return x + y};
const subtract = (x,y) => {
    if (x<y) {throw new Error(`Cannnot subtract from lower number.`)}
    return x-y
    };

function doOperation(n1, n2, operation) {
    return operation(n1,n2);
};

console.log(doOperation(10,20,add))
console.log(doOperation(30,20,subtract))

const r2 = doOperation(10, 50, function (x, y) {return x + y;});
console.log(r2);

const r1 = doOperation(10, 70, add);
console.log(r1);



