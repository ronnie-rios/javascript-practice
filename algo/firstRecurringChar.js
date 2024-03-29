//given an arr, return first reccuring char
//arr = [2,5,1,2,3,5,1,2,4]
//should return 2

//arr =[1,2,3,4]
//should return undefined


//less optimized
function findRecurring(arr) {
    //loop through the arr
    for(let i=0;i < arr.length; i++) {
       //loop again
        for(let j= 1 + i; j < arr.length; j++) {
            if (arr[i]===arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined
    //check value each at its index
    //use if statement
    //no matches yield undefined
}

//console.log(findRecurring(arr));

const arr = [1,2,2,42,3,4]
//hashmap faster / optimized
function findRecurring2(arr) {
    const map = {
      
    };
    for (let i = 0; i < arr.length; i++) {

        if(map[arr[i]]) {
            map[arr[i]]++
        } else {
            map[arr[i]] = 1
        }
        // if (map[arr[i]] !== undefined){
        //     return arr[i]
        // } else {
        //     map[arr[i]] = i;
        // }
        console.log(map);
    }
   // return undefined
   //return parseInt(map[42])
}

console.log(findRecurring2(arr));


function buildAnObjFromArr(arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {

        if(map[arr[i]]) {
            map[arr[i]]++
        } else {
            map[arr[i]] = 1
        }
       
    }
    return map
}