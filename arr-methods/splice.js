const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
//will return an arr that adds up to 10
//starts at 4 and removes 4 elements
arr.splice(1,4)
// Only change code above this line
console.log(arr);

const numbers = [10, 11, 12, 12, 15];
//naming the parameters to see it better
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
// The index at which to begin deleting elements (3), the number of elements to be deleted (1),
// and the remaining arguments (13, 14) will be inserted starting at that same index. 
//Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.
console.log(numbers);

console.log(numbers.splice(3,1, 13))

function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));