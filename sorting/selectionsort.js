//o(n^2)
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
    for(let i = 0; i <arr.length; i++) {
        let min = i
        let temp =arr[i]
        for(let j=i+1; j <arr.length; j++) {
            if(arr[j] < arr[min]) {
               min = j
            }
        }
        arr[i] =arr[min]
        arr[min] = temp
    }
  return  arr
}

console.log(selectionSort(numbers));