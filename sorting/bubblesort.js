const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
       
      }
    }
  }
}

function bubSort(nums) {
  for(let i =0; i < nums.length; i++) {
    for (letj=1; j <nums.length;j++) {
      if(nums[j] > nums[i]) {
        let temp = nums[j] // curr
        nums[j] = nums[j + 1]
        nums[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
