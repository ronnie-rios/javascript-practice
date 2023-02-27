
function fizzBuzz(number) {
    for(let i=1; i <= number; i++) {
       //multiples of 3 AND 5
       //multiples of 3
       //multiples of 5
       //log the number (i)
       if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
       } else if (i % 3 === 0) {
            console.log('fizz');
       } else if (i % 5 === 0) {
            console.log('buzz');
       } else {
        console.log(i);
       }
    }
}

fizzBuzz(100)