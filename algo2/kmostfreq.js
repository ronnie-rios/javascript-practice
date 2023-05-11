const arr1 = [1,1,1,2,2,3]
const k1 = 2;
//exoect [1,2] returns the two most frequent

const arr2 =[1,1,1,2,2,3]
const k2 = 1
//expects [1] 

function mostFreq(arr, k) {
    const map = {}
    //make a map
    for(const num of arr) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }
    console.log(map);
    //make an arr from the keys, and sort it based on the frequency
    const sorted = Object.keys(map).sort((a,b) => map[b] - map[a])
    console.log(sorted);
    //slice from the start to the k
    //and then we have to map through and make it a number cause it was str in an obj
    return sorted.slice(0, k).map(item => parseInt(item))
}

console.log(mostFreq(arr1, k1));
console.log(mostFreq(arr2, k2));
