//[           ]
//0           N
//i i+1
//go up to and not including n-1
//for i....n
//for j..n-1-i //because everytime the last item will be sorted (or at the end)
//if(arr[i] > arr[j])
//swap i and j

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
