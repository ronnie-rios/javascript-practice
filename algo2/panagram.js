function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }
  function isPangram2(string){
    //...
    const map ={}
    const lower = string.replace(/[^\w\s\']|_/g, "")
           .replace(/\s+/g, " ").toLowerCase()
    
    for(let char in lower) {
      if(!map[lower[char]]) {
        map[lower[char]] =1
      } else {
        map[lower[char]]++
      }
    }
    const arr = Object.keys(map)
   
    if(arr.length < 27) {
      return false
    } else {
      return true
    }
  }