const ages = [10, 15, 20, 25, 30]
//set the result to a variable
const result = ages.filter(checkAge)
//function test
function checkAge(age) {
    return age >=18
}
console.log(result)


const words = ['momo', 'ajax','biscuit']

const wordsResult = words.filter(checkWords)

function checkWords(words) {
    return words.length >4
}

console.log(wordsResult)