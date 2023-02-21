function findUniq(arr) {
    // do magic
    const map ={}
    for(let i =0;i<arr.length;i++) {
        if(!map[arr[i]]) {
          map[arr[i]] =1
        }  else {
          map[arr[i]]++
        }
    }
   
    for(let num in map) {
      if(map[num]===1) {
        return Number(num)
      }
    }
  }