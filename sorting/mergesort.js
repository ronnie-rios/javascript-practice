const nums = [4, 1, 3, 2, 6, 5];
const nums2 = [1,2,3,4,5]
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // divide array into halves
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // recursively sort and merge the halves
  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
  );
}

function merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      //add the left sided value if it's smaller
      result.push(leftArr.shift());
    } else {
      //add the right sided value if it's smaller
      result.push(rightArr.shift());
    }
  }

  // add remaining elements to result array
  return [...result, ...leftArr, ...rightArr];
}

console.log(merge(nums, nums2));