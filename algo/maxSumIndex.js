function maxPair(arr) {
    let maxSum = -Infinity;
    let result = [0,0];
    for (let i = 0; i < arr.length-1; i++) {
        let curr =arr[i];
        let next = arr[i+1]
        let currentSum = curr + next;
        if (currentSum > maxSum) {
            maxSum = currentSum;
            result = [i, i+1];
        }
    }
    return result;
}
const arr = [0, 5, 5, 2]
console.log(maxPair(arr))