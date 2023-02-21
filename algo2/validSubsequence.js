function isValidSubsequence(array, sequence) {
    // Write your code here.
    let holder =0;
    for(let i =0; i<array.length;i++) {
      //compare the array to the sub sequence
      //if the array[i] is in the sequence, then we increment the holder
      if(array[i]===sequence[holder]) {
        holder++
      }
    }
    //if the holder === the sequence length so if holder is 4, and sequence is 4 we know there are
    //4 items from the orgiinal arr in the new arr
    return holder === sequence.length
  }