//checks boolean on every value in an arr

let arr = [2,4,6,8]
//if any value turns false , whole arr will be false
//same for true

//takes a function, an anonymous func
//this anon func takes in an parameter, this paramter represent the individual item in the arrat
arr.every(compare)

arr.every(function(item) {
    return item > 5 //false, skip
})
//2

arr.every((num)=> {
    return num > 5
})
console.log(arr.every(val => val >5))


function compare(itemFromTheArray) {
    return itemFromTheArray > 5
}