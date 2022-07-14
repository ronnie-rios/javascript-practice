//double the array of each integer
const numArr = [10, 15, 45, 100]
const doubledNumArr = numArr.map(num => num * 2)
console.log(doubledNumArr)

//Example 2
//add an 's' to the end of each singular word to make it plural.
const singularWords = ['cookie', 'table', 'dog', 'cat']
//write your code below
const pluralWords = singularWords.map(
    words => words + "s"
)
console.log(pluralWords)

//map and add a property to an obj
const objList = [
    { name: 'momo' },
    { name: 'ajax' },
    { name: 'bizkit' }
]

objList.map(obj => {
    obj.id = Math.floor(Math.random() * 10)
})
console.log(objList)