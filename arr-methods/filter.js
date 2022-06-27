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

//filter by 
const items = [
    {
        name: 'momo',
        id: 1
    },
    {
        name: 'biscuit',
        id: 2
    },
    {
        name: 'ajax',
        id: 3
    },
]
//filters by id greater than 1
//takes in the .id 
const filterById = items.filter(item => item.id > 1)
console.log(filterById)
// function checkById(items) {
//     for (i in items)
// }
