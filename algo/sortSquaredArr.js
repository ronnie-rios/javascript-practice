// array = [ 1,2,3,5,6,8,9]
// sample output = [1,4,9,25,36,64,81]
function sortedSquaredArray(array) {
    // Write your code here.
   // let sortedArr = array.sort(function(a, b){ return a-b})
    const squaredArr = []
    for(let i=0; i < array.length; i++) {
      array[i] = Math.abs(array[i]) * Math.abs(array[i])
        squaredArr.push(array[i])
    }
    return squaredArr.sort((a,b) => {return a- b});
  }
  