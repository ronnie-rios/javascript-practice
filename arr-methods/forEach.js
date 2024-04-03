const fruits = ['plum', 'berry', 'watermelon']

fruits.forEach(eatFruit)
function eatFruit(fruit) {
    const eat = `i'm eating a ` +fruit
    console.log(eat)
}

fruits.forEach((fruit) => {
    return `im eating a ${fruit}`
})

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
//add property to obj
items.forEach(addProp)
function addProp(obj) {
    obj.type = 'cat'
}
console.log(items)
//refactor to one line
items.forEach(obj => obj.type = 'cat')
console.log(items)