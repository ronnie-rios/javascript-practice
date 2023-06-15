const arr1 = [1,1,1,2,2,3]
const k1 = 2;


function findMostFreq(arr, k) {
    //make an obj from the arr
    //create an obj
    const obj = {} 
    
    for(const num of arr) {
        //if first time it sees the value, set it to one and create that key value pair
        //else, we just increment it
        arr[1] = 1
        obj[num] = obj[num] ? obj[num] + 1 : 1;
    }
    const result = []; //we want two values
    //iterate over k x, because we nee to find the most frequent in each iteration
    for(let i = 0; i < k; i++) {
        //loop thru obj, push to the arr if it most common
        //create some base comparison
        let mostFrequent = 0;
        let maxNumber = 0; //key
// obj = {
//     1: 3,
//     2: 2,
//     3: 1
// }
//result [1, 1]
        for(let num in obj) {
            //num = key, obj[num] = value
            //check if the value > mostFrequenet, then reassign the mostFrequent
            if(obj[num] > mostFrequent) {
                mostFrequent = obj[num] //we reassign the value 
                maxNumber = num // so the max num will be the key
            }
        }
        result.push(Number(maxNumber)) //this is the key of the obj, which is the orginal value of that arr
        delete obj[maxNumber]
    }
    console.log(result);
    return result
}
findMostFreq(arr1, k1)
//key is the NUMBER from the ARRAY, the value is the FREQUENCY
// obj = {
//     1: 3,
//     2: 2,
//     3: 1
// }