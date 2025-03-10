const arr1 = [1,1,1,2,2,3]
const k1 = 2;
//exoect [1,2] returns the two most frequent

const arr2 =[1,1,1,2,2,3]
const k2 = 1
//expects [1] 
const arr3 = [1,1,1,2,2,2,2,3,3,4,4,4,4,4,]
const k3 = 1
//expects [4]

function mostFreq(arr, k) {
    const map = {}
    //make a map
    for(const num of arr) {
        //create the obj, if exist add to it, else set to 1
        map[num] = map[num] ? map[num]+1 : 1;
    }
    console.log(map, 'map');
    //make an arr from the keys, and sort it based on the frequency, cause we want the most frequent
    const sorted = Object.keys(map).sort((a,b) => map[b] - map[a])
    console.log(sorted, 'object keys sorted');
    //slice from the start to the k value, will get us the amount that k =
    //and then we have to map through and make it a number cause it was str from the obj
    return sorted.slice(0, k).map(item => parseInt(item))
}
console.log(mostFreq(arr1, k1));
console.log(mostFreq(arr2, k2));
console.log(mostFreq(arr3, k3));


function findMostFreq(arr, k) {
    const map = {}
    //make a map
    for(const num of arr) {
        //create the obj, if exist add to it, else set to 1
        map[num] = map[num] ? map[num]+1 : 1;
    }
    const result = [];
    //iterate over k times
    for(let i=0; i< k; i++) {
        let mostFrequent = 0;
        let maxNum= null;
        //iterate
        for(let num in map) {
            if(map[num] > mostFrequent) {
                mostFrequent = map[num];
                maxNum =Number(num)
            }
        }
        result.push(maxNum)
        delete map[maxNum]
    }
    return result
}

console.log(findMostFreq(arr1, k1));
console.log(findMostFreq(arr1, k1));