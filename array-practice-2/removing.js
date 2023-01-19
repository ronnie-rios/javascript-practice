const cats = ['momo', 'ajax', 'biscuit'];

console.log(cats.splice(1,1))
console.log(cats, 'after')

const slicedArr = cats.slice(0, 1)
const newArr = [...slicedArr, cats]
console.log(newArr)

const flatArr = newArr.flat()

console.log(flatArr, 'flat arr stored');

flatArr.forEach((cat) => {
    cat += ' is the best'
    console.log(cat)
})



function x(array, prop) {
    return array.sort((a,b) => {
        if(a[prop] < b[prop]) return -1
        if(a[prop] > b[prop]) return 1

        return 0
    })
}

x