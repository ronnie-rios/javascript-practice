function quickSort(arr, low, high) {
  //base case
  if (low >= high) {
    return;
  }
  //need out pivot index
  const pivotIndex = partition(arr, low, high);
  //need to do it again without the pivot
  quickSort(arr, low, pivotIndex - 1);
  //also need to quick sort the right // without the pivot hence the + 1
  quickSort(arr, pivotIndex + 1, high);
}
//returns the pivot index, where did we weakly sort it to
function partition(arr, low, high) {
  const pivot = arr[high];
  let index = low - 1; //most do -1 but we want to compare it to the low value withinthe arr
  //walk from the low to the high, not including the high cause it's the pivot!
  for (let i = low; i < high; i++) {
    //compare to the pivot not adjacent values
    if (arr[i] <= pivot) {
      index++; //increment
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  index++;
  //swap the pivot so the pivot will always be the most right item in the subarr
  arr[high] = arr[index];
  arr[index] = pivot;
  return index;
}
