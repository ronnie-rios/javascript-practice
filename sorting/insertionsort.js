const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i =1; i < array.length; i++) {
    let key = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > key) {
        array[j+1] = array[j]
        j = j-1
    }
    array[j+1] = key
  }
  return array
}

insertionSort(numbers);
console.log(numbers);