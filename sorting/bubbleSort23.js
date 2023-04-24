const nums = [10, 2, 11, 9, 7, 4, 1];

function bubbleSort(arr) {
  //don't need to compare last, as the largest num will get pushed to end of outer for loop
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(nums));
