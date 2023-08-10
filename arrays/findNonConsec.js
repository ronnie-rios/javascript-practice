/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

function allNonConsecutive(sortedNumbers) {
  const result = [];
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] - sortedNumbers[i - 1] > 1) {
      result.push({ i: i, n: sortedNumbers[i] });
    }
  }

  console.log(result);
  return result;
}

allNonConsecutive(numbers1);

const numbers2 = [2, 5, 3, 6, 7, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

function findConsecutiveSums(numbers, targetSum) {
    const result = [];
    for(let i=0; i<numbers.length;i++) {
        let sum=numbers[i]
        for(let j=i+1; j <= numbers.length; j++) {
            if (sum===targetSum) {
                result.push(numbers.slice(i,j));
            }
            sum +=numbers[j]
        }
    }
    console.log(result);
    return result;
}

findConsecutiveSums(numbers2, sum2)
