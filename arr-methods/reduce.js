//subtract all nubmers in an arr
const numbers = [200, 100, 50]
const total = 200
numbers.reduce(subtractNumbers) 

function subtractNumbers(total, num) {
    return total - num
}