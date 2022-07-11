function repeatStringNumTimes(str, num) {
    //intialize a new str
    let newString = ""
    //loop through based on number input
    for (let i=0; i < num; i++) {
        //add the str passed to new string via for loop
      newString += str
    }
    //return the newly created string
    return newString
  }
  
  repeatStringNumTimes("abc", 3);