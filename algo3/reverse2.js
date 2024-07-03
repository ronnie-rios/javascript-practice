const arr = [1,2,3,4,5]

function reverseArr(arr) {
  const newArr = [];

  for(let i = arr.length -1; i >=0; i--) {
    newArr.push(arr[i])
  }
  return newArr;
}

const example = reverseArr(arr);
console.log(example);