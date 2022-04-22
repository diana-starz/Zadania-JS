/* FizzBuzz */

function drawIntNumber(min,max){
  return Math.floor(Math.random()*(max-min)) + min;
}

function fizzBuzz(num) {

    if (num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz';


    if (num % 3 === 0)
        return 'Fizz';

    if (num % 5 === 0)
        return 'Buzz';

    return num;
};

function main(){
    const a = drawIntNumber(1,100);
   console.log(fizzBuzz(a));
}
main();