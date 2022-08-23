// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    //code here;
    let a = 0
    let b = 1
    let c = n
    for (let i = 2; i <=n; i++) {
        c = a + b;
        a = b
        b = c
        console.log(c)
    }
    return c
}

fibonacciIterative(8);
  
function fibonacciRecursive(n) {
    //becuse 2 will always have 1
    if (n < 2) {
        return n
    }
    //the #s before
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)

}
  
console.log(fibonacciRecursive(8, 'recursive'))