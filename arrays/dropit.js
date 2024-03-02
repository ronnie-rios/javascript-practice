const nums = [1, 4, 3, 6, 9, 15]

const func = (elem) => {
    return elem > 5;
}

//expects [6, 7]

function drop(arr, callback) {
    //loop
    
    while( arr.length > 0 && !callback(arr[0])) {
        
            arr.shift()
        
    }
    return arr;
}

console.log(drop(nums, (elem)=>func(elem)))


const filt = (arr, cb) => {
    arr.filter(item => cb(item))
}