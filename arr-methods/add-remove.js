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
//note push returns the length
//to see what if item gets added to arr, check the array again
console.log(items)

//same goes for pop items.push({name: 'new-chicken', id: 4})
items.pop()
console.log(items)