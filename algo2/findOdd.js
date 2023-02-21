// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
//[7] should return 7, because it occurs 1 time (which is odd).
//[1,1,2] should return 2, because it occurs 1 time (which is odd).
//[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
function findOdd(A) {
    //happy coding!
    const map = {}
    for(let num of A) {
      if(!map[num]) {
        map[num]=1
      } else {
        map[num]++
      }
    }
    for(let char in map) {
      
      if(map[char] %2 !==0) {
        return parseInt(char)
      }
    }
    
  }