const list = ['apple', 'pear', 'carrots','plum']
//finds the element in the arr with a length greater than 6
const findVegetable = list.find(ele => ele > 6)
console.log(findVegetable)

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
//finds the obj with the id of 1
console.log(items.find(cat => cat.id === 1))

function findByName(name) {
    return items.filter(cat => cat.name === name.toLowerCase())
}

console.log(findByName('Biscuit'))

function findById(cats) {
    return cats.filter(cat => cat.id !== 2)
}