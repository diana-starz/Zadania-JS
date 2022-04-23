function addSquares(x, y) {
    return x ** 2 + y ** 2;
}

function addSquares2(x, y) {

    function square(v) {
        return v ** 2;
    }
        function isXPositive() {
        return x > 0;
    }

    return square(x) + square(y);
}

console.log(addSquares2(5, 10));

