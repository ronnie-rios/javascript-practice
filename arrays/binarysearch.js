function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length -1;
  while(left <= right) {
    let middle = Math.floor((left+right)/2)

    if(arr[middle]===target) {
      return [arr[middle], middle];
    } else if (arr[middle] < target) {
      left = middle+1
    } else {
      right = middle -1
    }
  }
  return -1

}

const testArr = [1,2,3,4,5,6,7,8]
const testArr2 = [3,8,7,1,2,9,2]
const target = 2

console.log(binarySearch(testArr2,target));