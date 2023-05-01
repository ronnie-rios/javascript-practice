//5! = 5 * 4 * 3 * 2 * 1
//factorial
function findRecursive(num) {
//set base
//identify the recursive
//return
    if (num===0) {
        return 1
    }
    return num * findRecursive(num-1)
}

function findIterative(num) {
    let result = num
    while (num > 1) {
        num--
        result = result * num
    }
    return result
}

function factorial(num) {
    let result = num;
    for(let i =1; i < num; i++) {
        result = result * i
    }
    return result
}
console.log(findRecursive(5))
console.log(findIterative(3))
console.log(factorial(3));