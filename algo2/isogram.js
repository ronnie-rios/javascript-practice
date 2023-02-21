function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram2(str){
    //...
    const lower = str.toLowerCase()
   const map = {}
   for(let char in lower) {
     if(!map[lower[char]]) {
       map[lower[char]] = 1
     } else {
      return false
     }
   }
    
   return true
}