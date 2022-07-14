//given an int reverse the int
function reverseInt(n) {
    //turn into a str
    let reverse = n.toString()
    //split into arr, reverse the arr, join at ''
        .split('')
        .reverse()
        .join('')
    //turn into a nun and math.sign() checks for negative or not
    return parseInt(reverse) * Math.sign(n)
}

console.log(reverseInt(209))
console.log(reverseInt(-29))
