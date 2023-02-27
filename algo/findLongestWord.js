function findLongestWordLength(str) {
    //set the str into arr by splitting at space
    let words = str.split(' ')
    //have something to compare to
    let maxLength = 0
    //loop through the arr
    for (let i =0; i <words.length; i++){
        //check the length to our compare
      if (words[i].length > maxLength) {
        //set maxlength to words arr length at each length
        maxLength = words[i].length
        
      }
    }
    return maxLength
  
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))