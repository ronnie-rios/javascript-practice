
function fizzbuzz(num) {
    //loop through the num, start at 1, go to <= num, increment by 1
    for (let i = 1; i <= num; i++) {
        //if no remainder for % 3 or % 5
        if (i % 3 === 0 && i % 5 === 0) {
            //log fizzbuzz
            console.log('fizzbuzz')
        //if no remainder at % 3
        } else if (i % 3 === 0) {
        //log fizz
            console.log('fizz')
        //if no remainder at % 5
        } else if (i % 5 === 0) {
        //log buzz
            console.log('buzz')
        //return the num
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(15)