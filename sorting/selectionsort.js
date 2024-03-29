//o(n^2)
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //set curr index as minimum
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        //update min if current is lower than prev
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort(numbers));


const selectSort = numbers => {
  for(let i =0;i< numbers.length;i++) {
    let min = i;
    for(let j=i+1; j<numbers.length;j++) {
      if(numbers[j] < numbers[min]) {
        //if its smaller swap the min index with the j index
        min = j
      }
      //set a temp to swap
      let temp = numbers[i]
      numbers[i] = numbers[min]
      numbers[min]= temp
    }
  }
  return numbers
}

console.log(selectSort(numbers));