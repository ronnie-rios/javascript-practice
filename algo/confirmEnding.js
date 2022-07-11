function confirmEnding(str, target) {
    console.log(str.length)
    console.log(str.slice(str.length -target.length))
    //get string and slice by the length of str to targetstring then compare
    return str.slice(str.length - target.length) === target
}
  
 confirmEnding("Bizkit", "t");