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

function fibRecu(n) {
    if (n < 2) {
        return n
    }
    return fibRecu(n-1) + fibRecu(n -2)
}

console.log(fibRecu(4), 'recursive')