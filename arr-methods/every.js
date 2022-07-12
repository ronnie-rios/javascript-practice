//checks boolean on every value in an arr

let arr = [2,4,6,8]
//if any value turns false , whole arr will be false
//same for true
console.log(arr.every((val) => val >5))