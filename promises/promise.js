const userInput = process.argv[2];

const worldCup = (input) => {
    return new Promise((resolve, reject) => {
        if(input==='france') {
            resolve('mbappe hat-trick')
        } else if (input ==='argentina'){
            resolve('messi goated')
        } else {
            reject('u dont know football')
        }
    })
}

worldCup(userInput).then(console.log).catch(console.log)
console.log('after the promise, line 16');
console.log('after the promise, line 17');
console.log('after the promise, line 18');
console.log('after the promise, line 19');
console.log('after the promise, line 20');


const resolved = new Promise((resolve, reject) => {
    'hi'
})
console.log(resolved);