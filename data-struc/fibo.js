function fib(n) {
    let a = 0;
    let b= 1;
    let c = n;
    for(let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c
}

console.log(fib(4));
//exponential run time
function slowFib(n) {
    if (n < 2) {
        return n
    }
    return slowFib(n-1) + slowFib(n -2)
}

console.log(slowFib(4), 'recursive')

//memoization
//pass in a function
function memoizedFib(fn) {
    const cache = {}; //our container to use for ref
    //this is our anonymous function, and since it may recieve multiple args
    //use the rest operator
    return function(...args) {
        if(cache[args]) {
            //if something exist in our 'memory' return it
            return cache[args];
        }
        //result of slowfib
        const result = fn.apply(this, args)
        cache[args] = result;
        console.log(result)
        return result;
    }
};
//setting this variable to run slowfib as an arg
const fibM = memoizedFib(slowFib)
