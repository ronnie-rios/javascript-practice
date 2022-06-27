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
items.push({name: 'new-chicken', id: 4})
console.log(items)

//same goes for pop 
items.pop()
console.log(items)

//shift
//removes the first element in an arr and returns that removed element, changes length of arr
const removedCat = items.shift()
console.log(removedCat)

//return the new arr after shift completed
console.log(items)